export const convertTime24to12 = (time) => {
  if (time) {
    let [hours, minutes] = time.split(":");

    if (Number(hours) > 12) {
      return `${Number(hours - 12)}:${minutes} p.m.`;
    } else if (Number(hours) === 12) {
      return `${hours}:${minutes} p.m.`;
    } else return `${hours}:${minutes} a.m.`;
  }
};

export const new_rating = (rating, total_rating, value_rating) => {
  return (rating * total_rating + value_rating) / (total_rating + 1);
};

export const cloudinary_constant = (upload_preset) => {
  return {
    cloudName: "walkingpet",
    uploadPreset: upload_preset,
    sources: ["local", "camera"],
    // googleApiKey: "<image_search_google_api_key>",
    showAdvancedOptions: false,
    // cropping: false,
    // multiple: false,
    defaultSource: "local",
    styles: {
      palette: {
        window: "#FFAA00",
        sourceBg: "#FFFFFF",
        windowBorder: "#FFAA00",
        tabIcon: "#FFFFFF",
        inactiveTabIcon: "#FFDB92",
        menuIcons: "#0094C7",
        link: "#FFAA00",
        action: "#FF2929",
        inProgress: "#000000",
        complete: "#FFAA00",
        error: "#c43737",
        textDark: "#000000",
        textLight: "#FFFFFF",
      },
      fonts: {
        default: null,
        "'Poppins', sans-serif": {
          url: "https://fonts.googleapis.com/css?family=Poppins",
          active: true,
        },
      },
    },
  };
};
