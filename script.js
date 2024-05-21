
// Content : BC_PNP calculator, for canx immigration,
// Author: Kunal Chandra Das,
// Date: 18/03/2024 


// GLOBAL SELECTIONS AND OPARATIONS
let commonSections = document.querySelectorAll(".common-section");
let statusOfComplete = document.querySelector(".status");

// ALL POINT DISPLAYER SELECTION
let workExperiencePointDisplayer = document.getElementById(
  "workExperiencePointDisplayer"
);
let workExperiencePointDisplayer_1 = document.getElementById(
  "workExperiencePointDisplayer_1"
);
let workExperiencePointDisplayer_2 = document.getElementById(
  "workExperiencePointDisplayer_2"
);
let educationPointDisplayer = document.getElementById(
  "educationPointDisplayer"
);
let educationPointDisplayer_1 = document.getElementById(
  "educationPointDisplayer_1"
);
let educationPointDisplayer_2 = document.getElementById(
  "educationPointDisplayer_2"
);
let languagePointDisplayer = document.getElementById("languagePointDisplayer");
let firstLanguagePointDisplayer_1 = document.getElementById(
  "firstLanguagePointDisplayer_1"
);
let jobOfferPointDisplayer = document.getElementById("jobOfferPointDisplayer");
let emplyeeLocationPointDisplayer = document.getElementById(
  "emplyeeLocationPointDisplayer"
);
let emplyeeLocationPointDisplayer_2 = document.getElementById(
  "emplyeeLocationPointDisplayer_2"
);
let emplyeeLocationPointDisplayer_3 = document.getElementById(
  "emplyeeLocationPointDisplayer_3"
);
let totalPointsDisplayer = document.getElementById("totalPointsDisplayer");

// INITIAL VALUE SETUP OF POINT DISPLAYERS
workExperiencePointDisplayer.value = 0;
workExperiencePointDisplayer_1.value = 0;
workExperiencePointDisplayer_2.value = 0;
educationPointDisplayer.value = 0;
educationPointDisplayer_1.value = 0;
educationPointDisplayer_2.value = 0;
languagePointDisplayer.value = 0;
firstLanguagePointDisplayer_1.value = 0;
jobOfferPointDisplayer.value = 0;
emplyeeLocationPointDisplayer.value = 0;
emplyeeLocationPointDisplayer_2.value = 0;
emplyeeLocationPointDisplayer_3.value = 0;
totalPointsDisplayer.value = 0;

// 1. WORK EXPERIENCE SECTION
let workExperienceYearInputs = document.querySelectorAll(
  ".work-experience-radio-btn"
);
workExperienceYearInputs.forEach((clickAdd) => {
  clickAdd.addEventListener("click", () => {
    workExperienceYearInputs.forEach((removeClick) => {
      if (removeClick !== clickAdd) {
        removeClick.checked = false;
      }
    });
    clickAdd.checked = true;
  });
});
const workExperiencePointCalculations = (identity) => {
  statusOfComplete.style.width = "8%";
  // Points According Experience
  const firstAllocatedPoint = 20;
  const secondAllocatedPoint = 16;
  const thirdAllocatedPoint = 12;
  const fourthAllocatedPoint = 8;
  const fifthAllocatedPoint = 4;
  const sixthAllocatedPoint = 1;
  const seventhAllocatedPoint = 0;

  if (identity === 1) {
    workExperiencePointDisplayer.value = firstAllocatedPoint;
    workExperiencePointDisplayer_1.value = firstAllocatedPoint;
    commonSections[0].style.display = "none";
    commonSections[1].style.display = "block";
  } else if (identity === 2) {
    workExperiencePointDisplayer.value = secondAllocatedPoint;
    workExperiencePointDisplayer_1.value = secondAllocatedPoint;
    commonSections[0].style.display = "none";
    commonSections[1].style.display = "block";
  } else if (identity === 3) {
    workExperiencePointDisplayer.value = thirdAllocatedPoint;
    workExperiencePointDisplayer_1.value = thirdAllocatedPoint;
    commonSections[0].style.display = "none";
    commonSections[1].style.display = "block";
  } else if (identity === 4) {
    workExperiencePointDisplayer.value = fourthAllocatedPoint;
    workExperiencePointDisplayer_1.value = fourthAllocatedPoint;
    commonSections[0].style.display = "none";
    commonSections[1].style.display = "block";
  } else if (identity === 5) {
    workExperiencePointDisplayer.value = fifthAllocatedPoint;
    workExperiencePointDisplayer_1.value = fifthAllocatedPoint;
    commonSections[0].style.display = "none";
    commonSections[1].style.display = "block";
  } else if (identity === 6) {
    workExperiencePointDisplayer.value = sixthAllocatedPoint;
    workExperiencePointDisplayer_1.value = sixthAllocatedPoint;
    commonSections[0].style.display = "none";
    commonSections[1].style.display = "block";
  } else if (identity === 7) {
    workExperiencePointDisplayer.value = seventhAllocatedPoint;
    workExperiencePointDisplayer_1.value = seventhAllocatedPoint;
    commonSections[0].style.display = "none";
    commonSections[1].style.display = "block";
  }
};
const workExperienceGoNextBtn = () => {
  commonSections[0].style.display = "none";
  commonSections[1].style.display = "block";
};

// 2. ADDITIONAL WORK EXPERIENCE FIRST SECTION UNDER(WORK-EXPERIENCE)
let firstAdditionalWorkExperienceSecInputs = document.querySelectorAll(
  ".first-additional-wxp-radio-btn"
);
firstAdditionalWorkExperienceSecInputs.forEach((clickAdd) => {
  clickAdd.addEventListener("click", () => {
    firstAdditionalWorkExperienceSecInputs.forEach((removeClick) => {
      if (removeClick !== clickAdd) {
        removeClick.checked = false;
      }
    });
    clickAdd.checked = true;
  });
});
const additionalWorkExperienceOne = (identity) => {
  statusOfComplete.style.width = "16%";
  const ansIsYes = 10;

  if (identity === 1) {
    workExperiencePointDisplayer_1.value =
      parseInt(workExperiencePointDisplayer.value) + ansIsYes;
  } else if (identity === 0) {
    if (ansIsYes) {
      workExperiencePointDisplayer_1.value =
        parseInt(workExperiencePointDisplayer.value) - ansIsYes;
    }
    workExperiencePointDisplayer_1.value = parseInt(
      workExperiencePointDisplayer.value
    );
  }
  workExperiencePointDisplayer_2.value = parseInt(
    workExperiencePointDisplayer_1.value
  );
  commonSections[1].style.display = "none";
  commonSections[2].style.display = "block";
};
const firstAdditionalWorkExperienceNextBtn = () => {
  commonSections[1].style.display = "none";
  commonSections[2].style.display = "block";
};
const firstAdditionalWorkExperiencePreviousBtn = () => {
  commonSections[1].style.display = "none";
  commonSections[0].style.display = "block";
};

// 3. ADDITIONAL WORK EXPERIENCE SECOND SECTION UNDER(WORK-EXPERIENCE)
let secondAdditionalWorkExperienceSecInputs = document.querySelectorAll(
  ".second-additional-wxp-radio-btn"
);
secondAdditionalWorkExperienceSecInputs.forEach((clickAdd) => {
  clickAdd.addEventListener("click", () => {
    secondAdditionalWorkExperienceSecInputs.forEach((removeClick) => {
      if (removeClick !== clickAdd) {
        removeClick.checked = false;
      }
    });
    clickAdd.checked = true;
  });
});
const additionalWorkExperienceTwo = (identity) => {
  statusOfComplete.style.width = "24%";
  const AnsIsYes = 10;

  if (identity === 1) {
    workExperiencePointDisplayer_2.value =
      parseInt(workExperiencePointDisplayer_1.value) + AnsIsYes;
  } else if (identity === 0) {
    if (AnsIsYes) {
      workExperiencePointDisplayer_2.value =
        parseInt(workExperiencePointDisplayer_1.value) - AnsIsYes;
    }
    workExperiencePointDisplayer_2.value = parseInt(
      workExperiencePointDisplayer_1.value
    );
  }
  educationPointDisplayer.value = parseInt(
    workExperiencePointDisplayer_2.value
  );
  commonSections[2].style.display = "none";
  commonSections[3].style.display = "block";
};
const secondAdditionalWorkExperiencePreviousBtn = () => {
  commonSections[2].style.display = "none";
  commonSections[1].style.display = "block";
};
const secondAdditionalWorkExperienceNextBtn = () => {
  commonSections[2].style.display = "none";
  commonSections[3].style.display = "block";
};

//   4. EDUCATION QUALIFICATIONS SECTION
let educationalQualificationsInputs = document.querySelectorAll(
  ".educations-radio-btn"
);
educationalQualificationsInputs.forEach((clickAdd) => {
  clickAdd.addEventListener("click", () => {
    educationalQualificationsInputs.forEach((removeClick) => {
      if (removeClick !== clickAdd) {
        removeClick.checked = false;
      }
    });
    clickAdd.checked = true;
  });
});
const educationPointDecider = (identity) => {
  statusOfComplete.style.width = "32%";
  const valueForOne = 27;
  const valueForTwo = 22;
  const valueForThree = 15;
  const valueForFour = 15;
  const valueForFive = 5;
  const valueForSix = 5;
  const valueForSeven = 0;

  if (identity === 1) {
    if (
      valueForTwo ||
      valueForThree ||
      valueForFour ||
      valueForFive ||
      valueForSix
    ) {
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForTwo;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForThree;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForFour;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForFive;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForSix;
    }
    educationPointDisplayer.value =
      parseInt(workExperiencePointDisplayer_2.value) + valueForOne;
  } else if (identity === 2) {
    if (
      valueForOne ||
      valueForThree ||
      valueForFour ||
      valueForFive ||
      valueForSix
    ) {
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForOne;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForThree;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForFour;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForFive;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForSix;
    }
    educationPointDisplayer.value =
      parseInt(workExperiencePointDisplayer_2.value) + valueForTwo;
  } else if (identity === 3) {
    if (
      valueForOne ||
      valueForTwo ||
      valueForFour ||
      valueForFive ||
      valueForSix
    ) {
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForOne;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForTwo;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForFour;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForFive;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForSix;
    }
    educationPointDisplayer.value =
      parseInt(workExperiencePointDisplayer_2.value) + valueForThree;
  } else if (identity === 4) {
    if (
      valueForOne ||
      valueForTwo ||
      valueForThree ||
      valueForFive ||
      valueForSix
    ) {
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForOne;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForTwo;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForThree;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForFive;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForSix;
    }
    educationPointDisplayer.value =
      parseInt(workExperiencePointDisplayer_2.value) + valueForFour;
  } else if (identity === 5) {
    if (
      valueForOne ||
      valueForTwo ||
      valueForThree ||
      valueForFour ||
      valueForSix
    ) {
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForOne;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForTwo;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForThree;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForFour;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForSix;
    }
    educationPointDisplayer.value =
      parseInt(workExperiencePointDisplayer_2.value) + valueForFive;
  } else if (identity === 6) {
    if (
      valueForOne ||
      valueForTwo ||
      valueForThree ||
      valueForFour ||
      valueForFive
    ) {
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForOne;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForTwo;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForThree;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForFour;
      educationPointDisplayer.value =
        parseInt(workExperiencePointDisplayer_2.value) - valueForFive;
    }
    educationPointDisplayer.value =
      parseInt(workExperiencePointDisplayer_2.value) + valueForSix;
  } else if (identity === 7) {
    educationPointDisplayer.value =
      parseInt(workExperiencePointDisplayer_2.value) + valueForSeven;
  }

  educationPointDisplayer_1.value = parseInt(educationPointDisplayer.value);
  commonSections[3].style.display = "none";
  commonSections[4].style.display = "block";
};
const educationNextBtn = () => {
  commonSections[3].style.display = "none";
  commonSections[4].style.display = "block";
};
const educationPreviousBtn = () => {
  commonSections[3].style.display = "none";
  commonSections[2].style.display = "block";
};

// 5. FIRST ADDITIONAL EDUCATION SECTION
let firstEducationInputs = document.querySelectorAll(
  ".first-education-radio-btn"
);
firstEducationInputs.forEach((clickAdd) => {
  clickAdd.addEventListener("click", () => {
    firstEducationInputs.forEach((removeClick) => {
      if (removeClick !== clickAdd) {
        removeClick.checked = false;
      }
    });
    clickAdd.checked = true;
  });
});
const firstEducationPointDecider = (identity) => {
  statusOfComplete.style.width = "40%";
  const valueOfOne = 0;
  const valueOfTwo = 8;
  const valueOfThree = 6;

  if (identity === 1) {
    educationPointDisplayer_1.value =
      parseInt(educationPointDisplayer.value) + valueOfOne;
    educationPointDisplayer_2.value =
      parseInt(educationPointDisplayer.value) + valueOfOne;
  } else if (identity === 2) {
    educationPointDisplayer_1.value =
      parseInt(educationPointDisplayer.value) + valueOfTwo;
    educationPointDisplayer_2.value =
      parseInt(educationPointDisplayer.value) + valueOfTwo;
  } else if (identity === 3) {
    educationPointDisplayer_1.value =
      parseInt(educationPointDisplayer.value) + valueOfThree;
    educationPointDisplayer_2.value =
      parseInt(educationPointDisplayer.value) + valueOfThree;
  }
  commonSections[4].style.display = "none";
  commonSections[5].style.display = "block";
};
const firstEducationPreviousBtn = () => {
  commonSections[4].style.display = "none";
  commonSections[3].style.display = "block";
};
const firstEducationNextBtn = () => {
  commonSections[4].style.display = "none";
  commonSections[5].style.display = "block";
};

// 6. SECOND ADDITIONAL EDUCATION SECTION
let item = document.getElementById("toggle-container");
let selectButtonContent = document.querySelector(".text-content");
let clickCount = 0;
const showItem = (itemNumber) => {
  const notApplicable = 0;
  const applicable = 10;
  // To Show And Hide
  clickCount++;
  if (clickCount % 2 === 1) {
    item.style.display = "block";
  } else if (clickCount % 2 === 0) {
    item.style.display = "none";
  } else {
    item.style.display = "none";
  }

  // To Show And Hide On Selsect Content
  if (itemNumber === 1) {
    selectButtonContent.innerHTML = "Not Applicable";
    item.style.display = "none";
    educationPointDisplayer_2.value =
      parseInt(educationPointDisplayer_1.value) + notApplicable;
    languagePointDisplayer.value = parseInt(educationPointDisplayer_2.value);
    commonSections[5].style.display = "none";
    commonSections[6].style.display = "block";
    statusOfComplete.style.width = "48%";
  } else if (itemNumber === 2) {
    selectButtonContent.innerHTML =
      "Any Valid Trade Certificate Issued By SkilledTradesBC Or Industry Training Authority British Columbia (ITABC)";
    item.style.display = "none";
    educationPointDisplayer_2.value =
      parseInt(educationPointDisplayer_1.value) + applicable;
    languagePointDisplayer.value = parseInt(educationPointDisplayer_2.value);
    commonSections[5].style.display = "none";
    commonSections[6].style.display = "block";
    statusOfComplete.style.width = "48%";
  } else if (itemNumber === 3) {
    selectButtonContent.innerHTML =
      "Animal Health Technologists And Veterinary Technicians: NOC 32104";
    item.style.display = "none";
    educationPointDisplayer_2.value =
      parseInt(educationPointDisplayer_1.value) + applicable;
    languagePointDisplayer.value = parseInt(educationPointDisplayer_2.value);
    commonSections[5].style.display = "none";
    commonSections[6].style.display = "block";
    statusOfComplete.style.width = "48%";
  } else if (itemNumber === 4) {
    selectButtonContent.innerHTML = "Dental Assistants: NOC 33100";
    item.style.display = "none";
    educationPointDisplayer_2.value =
      parseInt(educationPointDisplayer_1.value) + applicable;
    languagePointDisplayer.value = parseInt(educationPointDisplayer_2.value);
    commonSections[5].style.display = "none";
    commonSections[6].style.display = "block";
    statusOfComplete.style.width = "48%";
  } else if (itemNumber === 5) {
    selectButtonContent.innerHTML = "Dental Hygienists: NOC 32111";
    item.style.display = "none";
    educationPointDisplayer_2.value =
      parseInt(educationPointDisplayer_1.value) + applicable;
    languagePointDisplayer.value = parseInt(educationPointDisplayer_2.value);
    commonSections[5].style.display = "none";
    commonSections[6].style.display = "block";
    statusOfComplete.style.width = "48%";
  } else if (itemNumber === 6) {
    selectButtonContent.innerHTML = "Dental Technicians: NOC 33100";
    item.style.display = "none";
    educationPointDisplayer_2.value =
      parseInt(educationPointDisplayer_1.value) + applicable;
    languagePointDisplayer.value = parseInt(educationPointDisplayer_2.value);
    commonSections[5].style.display = "none";
    commonSections[6].style.display = "block";
    statusOfComplete.style.width = "48%";
  } else if (itemNumber === 7) {
    selectButtonContent.innerHTML = "Denturists: NOC 32110";
    item.style.display = "none";
    educationPointDisplayer_2.value =
      parseInt(educationPointDisplayer_1.value) + applicable;
    languagePointDisplayer.value = parseInt(educationPointDisplayer_2.value);
    commonSections[5].style.display = "none";
    commonSections[6].style.display = "block";
    statusOfComplete.style.width = "48%";
  } else if (itemNumber === 8) {
    selectButtonContent.innerHTML =
      "Early Childhood Educators (ECE): NOC 42202";
    item.style.display = "none";
    educationPointDisplayer_2.value =
      parseInt(educationPointDisplayer_1.value) + applicable;
    languagePointDisplayer.value = parseInt(educationPointDisplayer_2.value);
    commonSections[5].style.display = "none";
    commonSections[6].style.display = "block";
    statusOfComplete.style.width = "48%";
  } else if (itemNumber === 9) {
    selectButtonContent.innerHTML = "Health Care Aide: NOC 33102";
    item.style.display = "none";
    educationPointDisplayer_2.value =
      parseInt(educationPointDisplayer_1.value) + applicable;
    languagePointDisplayer.value = parseInt(educationPointDisplayer_2.value);
    commonSections[5].style.display = "none";
    commonSections[6].style.display = "block";
    statusOfComplete.style.width = "48%";
  } else if (itemNumber === 10) {
    selectButtonContent.innerHTML = "Pharmacy Technicians: NOC 33103";
    item.style.display = "none";
    educationPointDisplayer_2.value =
      parseInt(educationPointDisplayer_1.value) + applicable;
    languagePointDisplayer.value = parseInt(educationPointDisplayer_2.value);
    commonSections[5].style.display = "none";
    commonSections[6].style.display = "block";
    statusOfComplete.style.width = "48%";
  } else if (itemNumber === 11) {
    selectButtonContent.innerHTML = "Practical Nurses: NOC 32101";
    item.style.display = "none";
    educationPointDisplayer_2.value =
      parseInt(educationPointDisplayer_1.value) + applicable;
    languagePointDisplayer.value = parseInt(educationPointDisplayer_2.value);
    commonSections[5].style.display = "none";
    commonSections[6].style.display = "block";
    statusOfComplete.style.width = "48%";
  } else if (itemNumber === 12) {
    selectButtonContent.innerHTML =
      "Traditional Chinese Medicine Practitioners And Acupuncturists: NOC 32200";
    item.style.display = "none";
    educationPointDisplayer_2.value =
      parseInt(educationPointDisplayer_1.value) + applicable;
    languagePointDisplayer.value = parseInt(educationPointDisplayer_2.value);
    commonSections[5].style.display = "none";
    commonSections[6].style.display = "block";
    statusOfComplete.style.width = "48%";
  }
};
const secondEducationNextBtn = () => {
  commonSections[5].style.display = "none";
  commonSections[6].style.display = "block";
};
const secondEducationPreviousBtn = () => {
  commonSections[5].style.display = "none";
  commonSections[4].style.display = "block";
};

// 7. LANGUAGE SECTION
let languageInputs = document.querySelectorAll(".language-radio-btn");
languageInputs.forEach((clickAdd) => {
  clickAdd.addEventListener("click", () => {
    languageInputs.forEach((removeClick) => {
      if (removeClick !== clickAdd) {
        removeClick.checked = false;
      }
    });
    clickAdd.checked = true;
  });
});
const languagePointDecider = (identity) => {
  statusOfComplete.style.width = "56%";
  const valueForOne = 30;
  const valueForTwo = 25;
  const valueForThree = 20;
  const valueForFour = 15;
  const valueForFive = 10;
  const valueForSix = 5;
  const valueForSeven = 0;

  if (identity === 1) {
    if (
      valueForTwo ||
      valueForThree ||
      valueForFour ||
      valueForFive ||
      valueForSix
    ) {
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForTwo;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForThree;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForFour;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForFive;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForSix;
    }
    languagePointDisplayer.value =
      parseInt(educationPointDisplayer_2.value) + valueForOne;
  } else if (identity === 2) {
    if (
      valueForOne ||
      valueForThree ||
      valueForFour ||
      valueForFive ||
      valueForSix
    ) {
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForOne;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForThree;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForFour;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForFive;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForSix;
    }
    languagePointDisplayer.value =
      parseInt(educationPointDisplayer_2.value) + valueForTwo;
  } else if (identity === 3) {
    if (
      valueForOne ||
      valueForTwo ||
      valueForFour ||
      valueForFive ||
      valueForSix
    ) {
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForOne;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForTwo;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForFour;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForFive;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForSix;
    }
    languagePointDisplayer.value =
      parseInt(educationPointDisplayer_2.value) + valueForThree;
  } else if (identity === 4) {
    if (
      valueForOne ||
      valueForTwo ||
      valueForThree ||
      valueForFive ||
      valueForSix
    ) {
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForOne;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForTwo;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForThree;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForFive;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForSix;
    }
    languagePointDisplayer.value =
      parseInt(educationPointDisplayer_2.value) + valueForFour;
  } else if (identity === 5) {
    if (
      valueForOne ||
      valueForTwo ||
      valueForThree ||
      valueForFour ||
      valueForSix
    ) {
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForOne;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForTwo;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForThree;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForFour;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForSix;
    }
    languagePointDisplayer.value =
      parseInt(educationPointDisplayer_2.value) + valueForFive;
  } else if (identity === 6) {
    if (
      valueForOne ||
      valueForTwo ||
      valueForThree ||
      valueForFour ||
      valueForFive
    ) {
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForOne;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForTwo;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForThree;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForFour;
      languagePointDisplayer.value =
        parseInt(educationPointDisplayer_2.value) - valueForFive;
    }
    languagePointDisplayer.value =
      parseInt(educationPointDisplayer_2.value) + valueForSix;
  } else if (identity === 7) {
    languagePointDisplayer.value =
      parseInt(educationPointDisplayer_2.value) + valueForSeven;
  }
  firstLanguagePointDisplayer_1.value = parseInt(languagePointDisplayer.value);
  commonSections[6].style.display = "none";
  commonSections[7].style.display = "block";
};
const languageNextBtn = () => {
  commonSections[6].style.display = "none";
  commonSections[7].style.display = "block";
};
const languagePreviousBtn = () => {
  commonSections[6].style.display = "none";
  commonSections[5].style.display = "block";
};

// 8. FIRST ADDITIONAL LANGUAGE SECTION
let firstlanguageInputs = document.querySelectorAll(
  ".first-language-radio-btn"
);

firstlanguageInputs.forEach((clickAdd) => {
  clickAdd.addEventListener("click", () => {
    firstlanguageInputs.forEach((removeClick) => {
      if (removeClick !== clickAdd) {
        removeClick.checked = false;
      }
    });
    clickAdd.checked = true;
  });
});
const firstLanguagePointDecider = (identity) => {
  statusOfComplete.style.width = "64%";
  const ansIsYes = 10;
  const ansIsNo = 0;

  if (identity === 1) {
    firstLanguagePointDisplayer_1.value =
      parseInt(languagePointDisplayer.value) + ansIsYes;
    jobOfferPointDisplayer.value = parseInt(
      firstLanguagePointDisplayer_1.value
    );
  } else if (identity === 0) {
    firstLanguagePointDisplayer_1.value =
      parseInt(languagePointDisplayer.value) + ansIsNo;
    jobOfferPointDisplayer.value = parseInt(
      firstLanguagePointDisplayer_1.value
    );
  }
  commonSections[7].style.display = "none";
  commonSections[8].style.display = "block";
};
const firstLanguageNextBtn = () => {
  commonSections[7].style.display = "none";
  commonSections[8].style.display = "block";
};
const firstLanguagePreviousBtn = () => {
  commonSections[7].style.display = "none";
  commonSections[6].style.display = "block";
};

// 9. JOB OFFER WAGE SECTION
let offerMoneyContainer = document.getElementById("toggle-container-2");
let offerMoneyBtnContent = document.querySelector(".job-offer-text-content");
let offerMoneyCount = 0;
const jobOfferPrice = (offerMoney) => {
  const hourlyCharge = {
    one: 55,
    two: 54,
    three: 53,
    four: 52,
    five: 51,
    six: 50,
    seven: 49,
    eight: 48,
    nine: 47,
    ten: 46,
    eleven: 45,
    twelve: 44,
    thirteen: 43,
    fortheen: 42,
    fifteen: 41,
    sixteen: 40,
    seventeen: 39,
    eighteen: 38,
    nineteen: 37,
    twenty: 36,
    twentyOne: 35,
    twentyTwo: 34,
    twentyThree: 33,
    twentyFour: 32,
    twentyFive: 31,
    twentySix: 30,
    twentySeven: 29,
    twentyEight: 28,
    twentyNine: 27,
    thirty: 26,
    thirtyOne: 25,
    thirtyTwo: 24,
    thirtyThree: 23,
    thirtyFour: 22,
    thirtyFive: 21,
    thirtySix: 20,
    thirtySeven: 19,
    thirtyEight: 18,
    thirtyNine: 17,
    forty: 16,
    fortyOne: 15,
    fortyTwo: 14,
    fortyThree: 13,
    fortyFour: 12,
    fortyFive: 11,
    fortySix: 10,
    fortySeven: 9,
    fortyEight: 8,
    fortyNine: 7,
    fifty: 6,
    fiftyOne: 5,
    fiftyTwo: 4,
    fiftyThree: 3,
    fiftyFour: 2,
    fiftyFive: 1,
    fiftySix: 0,
  };

  offerMoneyCount++;
  if (offerMoneyCount % 2 === 1) {
    offerMoneyContainer.style.display = "block";
  } else if (offerMoneyCount % 2 === 0) {
    offerMoneyContainer.style.display = "none";
  } else {
    offerMoneyContainer.style.display = "none";
  }

  if (offerMoney === 1) {
    offerMoneyBtnContent.innerHTML = "$70.00 and above";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.one;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 2) {
    offerMoneyBtnContent.innerHTML = "$69.00 to $69.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.two;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 3) {
    offerMoneyBtnContent.innerHTML = "$68.00 to $68.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.three;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 4) {
    offerMoneyBtnContent.innerHTML = "$67.00 to $67.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.four;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 5) {
    offerMoneyBtnContent.innerHTML = "$66.00 to $66.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.five;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 6) {
    offerMoneyBtnContent.innerHTML = "$65.00 to $65.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.six;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 7) {
    offerMoneyBtnContent.innerHTML = "$64.00 to $64.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.seven;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 8) {
    offerMoneyBtnContent.innerHTML = "$63.00 to $63.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.eight;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 9) {
    offerMoneyBtnContent.innerHTML = "$62.00 to $62.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.nine;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 10) {
    offerMoneyBtnContent.innerHTML = "$61.00 to $61.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.ten;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 11) {
    offerMoneyBtnContent.innerHTML = "$60.00 to $60.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.eleven;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 12) {
    offerMoneyBtnContent.innerHTML = "$59.00 to $59.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.twelve;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 13) {
    offerMoneyBtnContent.innerHTML = "$58.00 to $58.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.thirteen;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 14) {
    offerMoneyBtnContent.innerHTML = "$57.00 to $57.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fortheen;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 15) {
    offerMoneyBtnContent.innerHTML = "$56.00 to $56.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fifteen;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 16) {
    offerMoneyBtnContent.innerHTML = "$55.00 to $55.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.sixteen;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 17) {
    offerMoneyBtnContent.innerHTML = "$54.00 to $54.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.seventeen;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 18) {
    offerMoneyBtnContent.innerHTML = "$53.00 to $53.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.eighteen;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 19) {
    offerMoneyBtnContent.innerHTML = "$52.00 to $52.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.nineteen;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 20) {
    offerMoneyBtnContent.innerHTML = "$51.00 to $51.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.twenty;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 21) {
    offerMoneyBtnContent.innerHTML = "$50.00 to $50.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.twentyOne;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 22) {
    offerMoneyBtnContent.innerHTML = "$49.00 to $49.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.twentyTwo;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 23) {
    offerMoneyBtnContent.innerHTML = "$48.00 to $48.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.twentyThree;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 24) {
    offerMoneyBtnContent.innerHTML = "$47.00 to $47.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.twentyFour;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 25) {
    offerMoneyBtnContent.innerHTML = "$46.00 to $46.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.twentyFive;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 26) {
    offerMoneyBtnContent.innerHTML = "$45.00 to $45.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.twentySix;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 27) {
    offerMoneyBtnContent.innerHTML = "$44.00 to $44.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.twentySeven;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 28) {
    offerMoneyBtnContent.innerHTML = "$43.00 to $43.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.twentyEight;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 29) {
    offerMoneyBtnContent.innerHTML = "$42.00 to $42.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.twentyNine;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 30) {
    offerMoneyBtnContent.innerHTML = "$41.00 to $41.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.thirty;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 31) {
    offerMoneyBtnContent.innerHTML = "$40.00 to $40.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.thirtyOne;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 32) {
    offerMoneyBtnContent.innerHTML = "$39.00 to $39.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.thirtyTwo;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 33) {
    offerMoneyBtnContent.innerHTML = "$38.00 to $38.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.thirtyThree;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 34) {
    offerMoneyBtnContent.innerHTML = "$37.00 to $37.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.thirtyFour;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 35) {
    offerMoneyBtnContent.innerHTML = "$36.00 to $36.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.thirtyFive;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 36) {
    offerMoneyBtnContent.innerHTML = "$35.00 to $35.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.thirtySix;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 37) {
    offerMoneyBtnContent.innerHTML = "$34.00 to $34.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.thirtySeven;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 38) {
    offerMoneyBtnContent.innerHTML = "$33.00 to $33.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.thirtyEight;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 39) {
    offerMoneyBtnContent.innerHTML = "$32.00 to $32.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.thirtyNine;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 40) {
    offerMoneyBtnContent.innerHTML = "$31.00 to $31.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.forty;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 41) {
    offerMoneyBtnContent.innerHTML = "$30.00 to $30.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fortyOne;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 42) {
    offerMoneyBtnContent.innerHTML = "$29.00 to $29.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fortyTwo;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 43) {
    offerMoneyBtnContent.innerHTML = "$28.00 to $28.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fortyThree;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 44) {
    offerMoneyBtnContent.innerHTML = "$27.00 to $27.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fortyFour;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 45) {
    offerMoneyBtnContent.innerHTML = "$26.00 to $26.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fortyFive;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 46) {
    offerMoneyBtnContent.innerHTML = "$25.00 to $25.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fortySix;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 47) {
    offerMoneyBtnContent.innerHTML = "$24.00 to $24.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fortySeven;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 48) {
    offerMoneyBtnContent.innerHTML = "$23.00 to $23.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fortyEight;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 49) {
    offerMoneyBtnContent.innerHTML = "$22.00 to $22.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fortyNine;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 50) {
    offerMoneyBtnContent.innerHTML = "$21.00 to $21.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fifty;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 51) {
    offerMoneyBtnContent.innerHTML = "$20.00 to $20.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fiftyOne;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 52) {
    offerMoneyBtnContent.innerHTML = "$19.00 to $19.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fiftyTwo;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 53) {
    offerMoneyBtnContent.innerHTML = "$18.00 to $18.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fiftyThree;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 54) {
    offerMoneyBtnContent.innerHTML = "$17.00 to $17.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fiftyFour;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 55) {
    offerMoneyBtnContent.innerHTML = "$16.00 to $16.99";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fiftyFive;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  } else if (offerMoney === 55) {
    offerMoneyBtnContent.innerHTML = "Less than $16.00";
    offerMoneyContainer.style.display = "none";
    jobOfferPointDisplayer.value =
      parseInt(firstLanguagePointDisplayer_1.value) + hourlyCharge.fiftySix;
    emplyeeLocationPointDisplayer.value = parseInt(
      jobOfferPointDisplayer.value
    );
    commonSections[8].style.display = "none";
    commonSections[9].style.display = "block";
    statusOfComplete.style.width = "72%";
  }
};
const jobOfferNextBtn = () => {
  commonSections[8].style.display = "none";
  commonSections[9].style.display = "block";
};
const jobOfferPreviousBtn = () => {
  commonSections[8].style.display = "none";
  commonSections[7].style.display = "block";
};

// 10. JOB AREA SELECTON SECTION
let jobAreaInputs = document.querySelectorAll(".job-area-radio-btn");
jobAreaInputs.forEach((clickAdd) => {
  clickAdd.addEventListener("click", () => {
    jobAreaInputs.forEach((removeClick) => {
      if (removeClick !== clickAdd) {
        removeClick.checked = false;
      }
    });
    clickAdd.checked = true;
  });
});

const jobAreaPointsDecider = (identity) => {
  statusOfComplete.style.width = "80%";
  const areaOne = 0;
  const areaTwo = 5;
  const areaThree = 15;

  if (identity === 1) {
    emplyeeLocationPointDisplayer.value =
      parseInt(jobOfferPointDisplayer.value) + areaOne;
  } else if (identity === 2) {
    if (areaThree) {
      emplyeeLocationPointDisplayer.value =
        parseInt(jobOfferPointDisplayer.value) - areaTwo;
    }
    emplyeeLocationPointDisplayer.value =
      parseInt(jobOfferPointDisplayer.value) + areaTwo;
  } else if (identity === 3) {
    if (areaTwo) {
      emplyeeLocationPointDisplayer.value =
        parseInt(jobOfferPointDisplayer.value) - areaThree;
    }
    emplyeeLocationPointDisplayer.value =
      parseInt(jobOfferPointDisplayer.value) + areaThree;
  }

  emplyeeLocationPointDisplayer_2.value = parseInt(
    emplyeeLocationPointDisplayer.value
  );
  commonSections[9].style.display = "none";
  commonSections[10].style.display = "block";
};
const jobAreaNextBtn = () => {
  commonSections[9].style.display = "none";
  commonSections[10].style.display = "block";
};
const jobAreaPreviousBtn = () => {
  commonSections[9].style.display = "none";
  commonSections[8].style.display = "block";
};

// 11. GRADUATE FROM BC UNIVERSITY SECTION
let additionalInputs_2 = document.querySelectorAll(
  ".additional-employee-location-radio-btn"
);
additionalInputs_2.forEach((clickAdd) => {
  clickAdd.addEventListener("click", () => {
    additionalInputs_2.forEach((removeClick) => {
      if (removeClick !== clickAdd) {
        removeClick.checked = false;
      }
    });
    clickAdd.checked = true;
  });
});

const graduateFromBC = (identity) => {
  statusOfComplete.style.width = "90%";
  const isTrue = 10;

  if (identity === 1) {
    emplyeeLocationPointDisplayer_2.value =
      parseInt(emplyeeLocationPointDisplayer.value) + isTrue;
  } else if (identity === 0) {
    if (isTrue) {
      emplyeeLocationPointDisplayer_2.value =
        parseInt(emplyeeLocationPointDisplayer.value) - isTrue;
    }
    emplyeeLocationPointDisplayer_2.value = parseInt(
      emplyeeLocationPointDisplayer.value
    );
  }
  emplyeeLocationPointDisplayer_3.value = parseInt(
    emplyeeLocationPointDisplayer_2.value
  );
  commonSections[10].style.display = "none";
  commonSections[11].style.display = "block";
};

const additionalELPreviousBtn = () => {
  commonSections[10].style.display = "none";
  commonSections[9].style.display = "block";
};
const additionalELNextBtn = () => {
  commonSections[10].style.display = "none";
  commonSections[11].style.display = "block";
};

// 12. WORKED 1 YEAR FULL-TIME OR EQUIVALENT OUTSIDE OF METRO VANCOUVER SECTION

let aboveOneYearOrNotInputs = document.querySelectorAll(".area-bc-radio-btn");
aboveOneYearOrNotInputs.forEach((clickAdd) => {
  clickAdd.addEventListener("click", () => {
    aboveOneYearOrNotInputs.forEach((removeClick) => {
      if (removeClick !== clickAdd) {
        removeClick.checked = false;
      }
    });
    clickAdd.checked = true;
  });
});

const areaInBcPointDecider = (identity) => {
  statusOfComplete.style.width = "100%";
  const True = 10;
  if (identity === 1) {
    emplyeeLocationPointDisplayer_3.value =
      parseInt(emplyeeLocationPointDisplayer_2.value) + True;
  } else if (identity === 0) {
    if (True) {
      emplyeeLocationPointDisplayer_3.value =
        parseInt(emplyeeLocationPointDisplayer_2.value) - True;
    }
    emplyeeLocationPointDisplayer_3.value = parseInt(
      emplyeeLocationPointDisplayer_2.value
    );
  }
  totalPointsDisplayer.value = parseInt(emplyeeLocationPointDisplayer_3.value);
  commonSections[11].style.display = "none";
  commonSections[12].style.display = "block";
};

const areaBcPreviousBtn = () => {
  commonSections[11].style.display = "none";
  commonSections[10].style.display = "block";
};
const areaBcNextBtn = () => {
  commonSections[11].style.display = "none";
  commonSections[12].style.display = "block";
};

// 13. TOTAL POINT SECTION

const totalPointsPreviousBtn = () => {
  commonSections[12].style.display = "none";
  commonSections[11].style.display = "block";
};
