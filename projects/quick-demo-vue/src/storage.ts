import type { IAgoraRTCClient, SDK_CODEC } from "agora-rtc-sdk-ng/esm";
import { ref } from "vue";

const appid = ref(getAppid());
const channel = ref(getChannel());
const token = ref(getToken());
const videoCodec = ref(getVideoCodec());

const agoraInfo: {
  client?: IAgoraRTCClient;
} = {};

function getAppid() {
  return localStorage.getItem("appid") || "";
}

function saveAppid() {
  localStorage.setItem("appid", appid.value);
}

function getChannel() {
  return localStorage.getItem("channel") || "";
}

function saveChannel() {
  localStorage.setItem("channel", channel.value);
}

function getToken() {
  return localStorage.getItem("token") || "";
}

function saveToken() {
  localStorage.setItem("token", token.value);
}

function getVideoCodec(): SDK_CODEC {
  return (localStorage.getItem("videoCodec") as SDK_CODEC) || "vp8";
}

function saveVideoCodec() {
  localStorage.setItem("videoCodec", videoCodec.value);
}

export {
  appid,
  channel,
  token,
  videoCodec,
  getAppid,
  saveAppid,
  getChannel,
  saveChannel,
  getToken,
  saveToken,
  getVideoCodec,
  saveVideoCodec,
};
export { agoraInfo };
