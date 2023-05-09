export default function HeadingStyle({
  styleHeading,
  subTitle,
  title,
  colorTitle,
  opacity
}) {
  return (
    <div className=" relative">
      <div className={`${opacity &&"opacity-" + `${opacity}`} top-[-35px] bottom-0 inset-x-0 absolute`}>
        <span   className={`inline-block sm:text-[100px] leading-[130px] text-[color:#dceeea] pointer-events-none break-all font-quentinregular text-24`}
>
          {styleHeading}
        </span>
      </div>

      <div className=" relative z-[2]">
        <div className=" inline-block">
          <span className="text-[15px] leading-[25px] flex items-center uppercase text-[color:#00c194] font-medium mb-2.5;">
            {subTitle}
          </span>
        </div>

        <h2
          className={`${
            colorTitle ? "text-" + `[${colorTitle}]` : "text-[#0E2E50]"
          } sm:text-4xl text-20 font-semibold leading-[1.2]`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
