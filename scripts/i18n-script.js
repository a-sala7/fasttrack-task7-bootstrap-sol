// ====== CONSTANTS ======
// The actual text

const I18N_STRINGS_EN = {
  obj1: {
    obj2: {
      helloWorld: "Hello, World!",
    },
  },
  menu: {
    changeLanguageButton: "العربية",
  },
};

const I18N_STRINGS_AR = {
  obj1: {
    obj2: {
      helloWorld: "مرحبا يا ناس!",
    },
  },
  menu: {
    changeLanguageButton: "English",
  },
};



// ====== LOCALIZED TEXT INSERTION LOGIC ======

function loadLocalizedText() {
  const i18nElements = document.querySelectorAll("[textkey]");
  const lang = document.documentElement.getAttribute("lang");

  let strings;
  if (lang === "en") {
    strings = I18N_STRINGS_EN;
  } else if (lang === "ar") {
    strings = I18N_STRINGS_AR;
  }

  i18nElements.forEach((e) => {
    const path = e.getAttribute("textkey");

    e.textContent = getNestedData(strings, path);
  });
}

function getNestedData(obj, dotNotationPath) {
  let nestedData = obj;

  dotNotationPath.split(".").forEach((subPath) => {
    nestedData = nestedData[subPath];
  });

  return nestedData;
}

function changeLang() {
  const lang = document.documentElement.getAttribute("lang");
  if (lang === "en") {
    setLang("ar");
  } else if (lang === "ar") {
    setLang("en");
  }
}

function setLang(lang) {
  document.documentElement.setAttribute("lang", lang);
  if (lang === "en") {
    document.documentElement.setAttribute("dir", "ltr");
  } else if (lang === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
  }
  loadLocalizedText();
}

// CALL INITIALLY ON PAGE LOAD
loadLocalizedText();
