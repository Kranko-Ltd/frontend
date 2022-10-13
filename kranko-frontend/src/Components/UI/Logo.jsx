import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <div
      className="w-[70px] h-10 ml-6 z-50 cursor-pointer"
      onClick={handleClick}
    >
      <Image
        
        src="/logo.svg"
        layout="responsive"
        alt="logo"
        width={5}
        height={5}
        opacity={100}
      />
    </div>
  );
};

export default Logo;
