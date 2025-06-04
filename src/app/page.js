import Hello from "@/componets/Hello";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen  ">
      <div className="text-2xl lg:text-6xl h-fit w-fit ">Hello</div>
      <div className="text-4xl lg:text-9xl text-[#FC5285] h-fit w-fit">“Labour Care Guide”</div>
    </div>
  );
}
