import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import Link from "next/link";

const NavBar = async () => {
  //const categories = await getCategories();

  const categories: string[] = ["Nuovi", "Verificati", "Tutti"];

  return (
    <MainNav data={categories} />
  );
};

export default NavBar;