import Footer from "@/src/Layout/Footer";


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" text-white min-h-screen flex flex-col">
      {children}
      <Footer/>
    </div>
  );
}