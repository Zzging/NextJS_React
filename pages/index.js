import Footer from "../components/footer/footer";
import Shops from "../components/Shops";
import SetHead from "../components/head";
import Head from "next/head";

const PRODUCT_LISTS = [
  {
    product_id: 1,
    product_name: "EAU DE PARFUM SPRAY ",
    product_img:
      "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/n-5-eau-de-parfum-spray-3-4fl-oz--packshot-default-125530-8833876492318.jpg",
    product_price: 6600,
  },
  {
    product_id: 2,
    product_name: "n°5 l'eau",
    product_img:
      "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/n-5-l-eau-fresh-lotion-3-4fl-oz--packshot-default-105640-8821014822942.jpg",
    product_price: 2000,
  },
  {
    product_id: 3,
    product_name: "n°5",
    product_img:
      "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/n-5-eau-de-parfum-twist-and-spray-3x0-7fl-oz--packshot-default-125407-8824197152798.jpg",
    product_price: 1600,
  },
  {
    product_id: 4,

    product_name: "EAU DE TOILETTE TWIST AND SPRAY",
    product_img:
      "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/n-5-l-eau-eau-de-toilette-twist-and-spray-3x0-7fl-oz--packshot-default-105500-8833876164638.jpg",
    product_price: 7800,
  },
  {
    product_id: 5,

    product_name: "PARFUME BOTTLE",
    product_img:
      "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/n-5-parfum-1fl-oz--packshot-default-120150-8833875542046.jpg",
    product_price: 5000,
  },
  {
    product_id: 6,

    product_name: "BATH SOAP",
    product_img:
      "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/n-5-the-bath-soap-5-3oz--packshot-default-105700-8833876754462.jpg",
    product_price: 2625,
  },
  {
    product_id: 7,

    product_name: "L'EAU SPRAY",
    product_img:
      "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/n-5-l-eau-eau-de-toilette-spray-6-8fl-oz--packshot-default-105540-8833877803038.jpg",
    product_price: 8560,
  },
  {
    product_id: 8,

    product_name: "EAU DE TOILETTE SPRAY",
    product_img:
      "https://www.chanel.com/images//t_one//w_0.55,h_0.55,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/n-5-eau-de-toilette-spray-3-4fl-oz--packshot-default-105467-8833875804190.jpg",
    product_price: 11800,
  },
  {
    product_id: 9,

    product_name: "n°5 l'eau",
    product_img:
      "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/n-5-l-eau-on-hand-cream-1-7fl-oz--packshot-default-105580-8824198004766.jpg",
    product_price: 1562,
  },
  {
    product_id: 10,
    product_name: "เจลอาบน้ำ N°5",
    product_img:
      "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/n-5-the-shower-gel-6-8fl-oz--packshot-default-105768-8835354099742.jpg",
    product_price: 1140,
  },
];

export default function Home(props) {
  const { data } = props;
  return (
    <>
      <SetHead />
      <Shops data={data} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: PRODUCT_LISTS,
    },
  };
}
