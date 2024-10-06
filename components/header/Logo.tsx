import Image from "next/image";
import Link from "next/link";
Link

Image

export default function Logo() {
  return (
    <>
    <Link href="/">
      <Image
        src="/img/honey_bee_logo.png"
        alt="Hone_Bee_Logo"
        width={60}
        height={-0}
        priority={true}
        className="object-fill "
      />
    </Link>
  </>
  )
}
