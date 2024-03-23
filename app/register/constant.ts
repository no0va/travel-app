import { mainStrings } from "@/constants/srings";

export const form = (value: any) => {
  return [
    {
      value: value.name,
      name: "name",
      placeholder: mainStrings.name,
      icon: "account-outline",
      type: "text",
      line: true,
    },
    {
      value: value.family,
      name: "family",
      placeholder: mainStrings.family,
      icon: "account-outline",
      type: "text",
      line: true,
    },
    {
      value: value.email,
      name: "email",
      placeholder: mainStrings.email,
      icon: "email-outline",
      type: "email",
      line: true,
    },
    {
      value: value.password,
      name: "password",
      placeholder: mainStrings.password,
      icon: "lock-alert-outline",
      type: "password",
      line: true,
    },
    {
      value: value.confirmPassword,
      name: "confirmPassword",
      placeholder: mainStrings.confirmPassword,
      icon: "lock-check-outline",
      type: "password",
      line: false,
    },
  ];
};
