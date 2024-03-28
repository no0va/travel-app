export const form = (value: any) => {
  return [
    {
      value: value.name,
      name: "name",
      placeholder: "نام",
      icon: "account-outline",
      type: "text",
    },
    {
      value: value.family,
      name: "family",
      placeholder: "نام خانوادگی",
      icon: "account-outline",
      type: "text",
    },
    {
      value: value.nationalCode,
      name: "nationalCode",
      placeholder: "کد ملی",
      icon: "square-edit-outline",
      type: "text",
    },
    {
      value: value.birthday,
      name: "birthday",
      placeholder: "تاریخ تولد",
      icon: "calendar",
      type: "text",
    },
    {
      value: value.phoneNumber,
      name: "phoneNumber",
      placeholder: "شماره موبایل",
      icon: "cellphone-check",
      type: "text",
    },
  ];
};
