"use client";

import Link from "next/link";
import "./mainButton.css";
import { useTheme } from "next-themes";
import {
  ArrowRightWhite,
  ArrowRightPurple,
  ArrowRightLinearPurple,
} from "@/app/components/icons/arrowRight";
import ArrowRight from "@/app/components/icons/arrowRight";
import { useRouter } from "next/navigation";

// Who ever works on this file, I am sorry :D this is bad code, but I am not going to refactor it :D

export function MainButton({
  label,
  href,
  hasArrowRight = false,
  typographyClass,
  hasBorder = true,
  className,
  onClick,
  wrapperClass,
}) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={
        hasBorder
          ? `${className} mainButtonWithBorderBG z-50`
          : `${className} mainButtonBGwithoutBorder z-50`
      }
    >
      <div
        className={`${
          wrapperClass || " px-3 py-4"
        } mainButton w-full h-[45px] md:h-full`}
      >
        <h6
          className={
            typographyClass
              ? `${typographyClass} mainButtonText text-white text-[12px] lg:text-[14px] text-nowrap font-extrabold`
              : "text-[12px] lg:text-[14px] text-nowrap font-extrabold mainButtonText text-white"
          }
        >
          {label}
        </h6>
        {hasArrowRight && (
          <ArrowRight
            className="size-6 mb-[1px] arrowButton"
            alt="Arrow Right"
          />
        )}
      </div>
    </button>
  );
}

export function DeltaPurpleButton({
  typographyClass,
  className,
  buttonClassName,
  onClick,
  label,
  isUppercase = true,
  href,
  hasArrowRight = true,
}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      // Open the link in a new tab if href is provided
      window.open(href, "_blank");
    }
  };

  return (
    <button onClick={handleClick} className={`${buttonClassName} purpleButton`}>
      <div
        className={`${
          className
            ? `${className} h-[30px] md:h-full flex items-center justify-center gap-2 mx-auto`
            : "px-5 py-6 md:py-[10px] h-[30px] md:h-full flex items-center justify-center gap-2 mx-auto"
        }`}
      >
        <h6
          className={`${
            typographyClass
              ? `${typographyClass} ctaButtonText font-bold ${
                  isUppercase && "uppercase"
                } text-white text-nowrap`
              : `${
                  isUppercase && "uppercase"
                } ctaButtonText text-[12px] font-bold  text-white text-nowrap`
          }
          }`}
        >
          {label}
        </h6>
        {hasArrowRight && (
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" alt={"Arrow Right"} />
        )}
      </div>
    </button>
  );
}

export function DeltaWhiteButton({
  className,
  onClick,
  label,
  href,
  hasArrowRight = true,
}) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white rounded-full cursor-pointer z-[100] relative"
    >
      <div
        className={`${
          className
            ? `${className} h-[30px] md:h-full flex items-center justify-center gap-2 mx-auto`
            : "px-5 py-6 md:py-[10px] h-[30px] md:h-full flex items-center justify-center gap-2 mx-auto"
        }`}
      >
        <h6
          className={
            "text-[15px] font-bold uppercase bg-gradient-to-r from-[#AD91FF] to-[#6B70ED] inline-block text-transparent bg-clip-text"
          }
        >
          {label}
        </h6>
        {hasArrowRight && (
          <ArrowRightLinearPurple
            className="size-6 mb-[1px] arrowButton"
            alt="Arrow-Right-Purple"
          />
        )}
      </div>
    </button>
  );
}

export function AboutButtonDarkBG({
  customClass,
  label,
  onClick,
  href,
  hasArrowRight = false,
}) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <button
      className={`${customClass} aboutButtonDarkBG`}
      onClick={handleClick}
    >
      <div className="flex items-center gap-2">
        <p className="buttonLightModeText min-w-fit">{label}</p>
        {hasArrowRight && (
          <ArrowRight className="size-5 rightArrowAboutBtn" alt="Arrow Right" />
        )}
      </div>
    </button>
  );
}

export function ArrowButton({ onClick }) {
  return (
    <>
      <button onClick={onClick} className="arrowButtonBG w-fit h-fit">
        <div className="rounded-[65px] w-[70px] h-[40px] flex justify-center items-center bg-arrowButtonDarkGradient arrowButtonChild">
          <ArrowRight src={ArrowRightWhite} alt={"Arrow Right"} />
        </div>
      </button>
    </>
  );
}

export function ContactUsButton({ label, onClick }) {
  return (
    <button onClick={onClick} className="ctaButtonBorder w-full h-fit">
      <div className="md:py-[10px] md:px-5 py-[18px] px-[20px] h-[30px] md:h-full ctaButtonWrapper">
        <p className="ctaButtonText text-[#FEEEF4]">{label}</p>
        <ArrowRight className="size-6 mb-[1px] arrowButton" alt="Arrow Right" />
      </div>
    </button>
  );
}


export function BlogButton({ onClick, label, fullWidth = false }) {
  return (
    <button
      onClick={onClick}
      className={`blogButtonWrapper ${fullWidth ? "w-full" : "w-fit"}`}
    >
      <div className="blogFilterButton w-full h-[45px] md:h-full p-4">
        <h6 className="text-[12px] lg:text-[14px] text-nowrap font-extrabold mainButtonText">
          {label}
        </h6>
      </div>
    </button>
  );
}

export function BlogCardButton({
  isLink = false,
  href = "/",
  onClick,
  label,
  isSmallbtn,
  fullWidth = false,
  hasArrowRight = false,
  typographyClass,
  whiteOnlyArrow = false,
  forcePurpleArrow = false,
}) {
  const { theme } = useTheme();

  const ArrowIcon = () => {
    if (!hasArrowRight) return null;

    if (forcePurpleArrow) {
      return (
        <ArrowRightPurple
          className="size-6 mb-[1px] arrowButton"
          alt="Arrow Right Purple"
        />
      );
    }

    if (theme === "dark") {
      return (
        <ArrowRight className="size-6 mb-[1px] arrowButton" alt="Arrow Right" />
      );
    }

    if (!whiteOnlyArrow) {
      return (
        <ArrowRightPurple
          className="size-6 mb-[1px] arrowButton"
          alt="Arrow Right Purple"
        />
      );
    }

    return (
      <ArrowRight className="size-6 mb-[1px] arrowButton" alt="Arrow Right" />
    );
  };

  return isLink ? (
    <Link href={href}>
      <button
        onClick={onClick}
        className={`blogButtonWrapper md:w-fit w-full ${
          fullWidth ? "!w-full" : "!w-fit"
        }`}
      >
        <div
          className={`blogButtonContent md:h-full flex items-center justify-center gap-2 ${
            isSmallbtn ? "px-[14px] py-[10px]" : "px-6 py-4"
          }`}
        >
          <h6
            className={`${
              isSmallbtn ? "text-[12px]" : "text-[12px] lg:text-[14px]"
            } text-nowrap font-extrabold blogCardText ${
              typographyClass || "dark:text-[#FFF5F0] text-[#565AC2]"
            }`}
          >
            {label}
          </h6>
          <ArrowIcon />
        </div>
      </button>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`blogButtonWrapper md:w-fit w-full ${
        fullWidth ? "!w-full" : "!w-fit"
      }`}
    >
      <div
        className={`blogButtonContent md:h-full flex items-center justify-center gap-2 ${
          isSmallbtn ? "px-[14px] py-[10px]" : "px-6 py-4"
        }`}
      >
        <h6
          className={`${
            isSmallbtn ? "text-[12px]" : "text-[12px] lg:text-[14px]"
          } text-nowrap font-extrabold blogCardText ${
            typographyClass || "dark:text-[#FFF5F0] text-[#565AC2]"
          }`}
        >
          {label}
        </h6>
        <ArrowIcon />
      </div>
    </button>
  );
}
