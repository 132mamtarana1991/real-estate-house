import Image from "next/image";

export default function Banner() {
  return (
    <div>
      <img
        src="/images/main-banner.jpg"
        alt="google"
        className=" mx-auto sm:h-[620px] w-full"
      />
    </div>
  );
}
