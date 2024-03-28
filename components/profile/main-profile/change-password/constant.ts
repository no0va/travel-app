export const form = (value: any) => {
  return [
    {
      value: value.currentPassword,
      name: "currentPassword",
      placeholder: "رمز عبور فعلی",
      icon: "lock-alert",
      type: "text",
    },
    {
      value: value.newPassword,
      name: "newPassword",
      placeholder: "رمز عبور جدید",
      icon: "account-outline",
      type: "text",
    },
    {
      value: value.confirmNewPassword,
      name: "confirmNewPassword",
      placeholder: "تایید رمز عبور جدید",
      icon: "account-outline",
      type: "text",
    },
  ];
};
