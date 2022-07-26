<template>
  <div class="relative z-10">
    <beautiful-chat
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :title="title"
      :showEdition="true"
      :showDeletion="true"
      placeholder="发个消息聊聊呗"
      :showTypingIndicator="showTypingIndicator"
      :showLauncher="true"
      :showCloseButton="true"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage"
    >
    </beautiful-chat>
  </div>
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
const props = defineProps({
  isopenChat: {
    type: Boolean,
    default: "false",
  },
  rowData: {
    type: Object,
    defaule: () => {},
  },
});
const emit = defineEmits(["close"]);
const opened = computed(() => {
  return props.isopenChat;
});
const title = ref("你");
const data_row = computed(() => {
  return props.rowData;
});
const isChatOpen = ref(false); // to determine whether the chat window should be open or closed

const participants = ref([
  {
    id: "user1",
    name: data_row.value.name,
    imageUrl: "https://avatars3.githubusercontent.com/u/1915989?s=230&v=4",
  },
]);
const messageList = ref([]); // the list of the messages to show, can be paginated and adjusted dynamically
watch(opened, async (newValue) => {
  isChatOpen.value = newValue;
});
watch(data_row, async (newValue) => {
  participants.value[0].name = data_row.value.name;
  title.value=`您与${data_row.value.name}的私信`
  let msgs = [];
  data_row.value.content.map((item) => {
    msgs.push({
      type: "text",
      author: `user1`,
      data: { text: item },
    });
    msgs.push({
      type: "text",
      author: `me`,
      data: { text: "???" },
    });
  });
  messageList.value = msgs;
});
onMounted(() => {
  console.log(props.rowData);
});
const titleImageUrl = ref(
  "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png"
);

const newMessagesCount = ref(0);
const showTypingIndicator = ref(""); // when set to a value matching the participant.id it shows the typing indicator for the specific user
const colors = ref({
  header: {
    bg: "#4e8cff",
    text: "#ffffff",
  },
  launcher: {
    bg: "#4e8cff",
  },
  messageList: {
    bg: "#ffffff",
  },
  sentMessage: {
    bg: "#009988",
    text: "#ffffff",
  },
  receivedMessage: {
    bg: "#fd5b43",
    text: "#ffffff",
  },
  userInput: {
    bg: "#f4f7f9",
    text: "#565867",
  },
}); // specifies the color scheme for the component
const alwaysScrollToBottom = ref(false); // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
const messageStyling = ref(true); // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)

const sendMessage = (text) => {
  if (text.length > 0) {
    newMessagesCount.value = isChatOpen.value
      ? newMessagesCount.value
      : newMessagesCount.value + 1;
    onMessageWasSent({ author: "support", type: "text", data: { text } });
  }
};
const onMessageWasSent = (message) => {
  // called when the user sends a message
  messageList.value = [...messageList.value, message];
};
const openChat = () => {
  // called when the user clicks on the fab button to open the chat
  isChatOpen.value = true;
  newMessagesCount.value = 0;
};
const closeChat = () => {
  // called when the user clicks on the botton to close the chat
  emit("close");
  isChatOpen.value = false;
};
const handleScrollToTop = () => {
  // called when the user scrolls message list to top
  // leverage pagination for loading another page of messages
};
const handleOnType = () => {
  console.log("Emit typing event");
};
const editMessage = (message) => {
  const m = messageList.find((m) => m.id === message.id);
  m.isEdited = true;
  m.data.text = message.data.text;
};
</script>
<style lang="css">
.sc-launcher {
  display: none;
}
</style>
