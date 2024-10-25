import React from "react";

const Button = ({ children, theme, className, href }) => {
  const baseClasse = "text-white hover:text-white";

  const themeClasse =
    theme === "primary"
      ? "bg-p-3 hover:bg-p-2"
      : theme === "secondary"
      ? "bg-n-7 hover:bg-p-3"
      : "";

  //cette première fonction permet de rendre un bouton
  const renderButton = () => (
    <button
      className={`button py-3 px-3 lg:py-4 px-6 rounded-lg ${themeClasse} ${baseClasse} ${className}`}
    >
      {children}
    </button>
  );

  //celle ci va rendre un lien avec l'apparence d'un bouton
  const renderLink = () => {
    return (
      <a
        href=""
        className={`button inline-block py-3 px-3 lg:py-4 px-6 rounded-lg no-underline ${themeClasse} ${baseClasse} ${className}`}
      >
        {children}
      </a>
    );
  };

  return href ? renderLink() : renderButton();
};

export default Button;
