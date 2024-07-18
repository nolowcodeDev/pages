import liff from "@line/liff";

export const getScriptUrlById = (id) => {
  return `https://script.google.com/macros/s/${id}/exec`;
};

export const getImageUrl = (name, ext) => {
  return new URL(`./assets/images/${name}.${ext}`, import.meta.url).href;
};

export const useLiff = (liffId = import.meta.env.VITE_LIFF_ID) => {
  const error = ref(null);
  const liffInstance = ref(null);
  liff
    .init({ liffId: liffId })
    .then(() => {
      liffInstance.value = liff;
      error.value = null;
      if (!liff.isLoggedIn()) {
        liff.login({ redirectUri: window.location.href });
      }
    })
    .catch((err) => (error.value = err));

  return { liff: liffInstance, error };
};