import { SEARCH, CLICK, CHANGE_LANGUAGE_TO_ARABIC, CHANGE_LANGUAGE_TO_ENGLISH } from './albumsConstants';


/* Import Images */

import AhlawAhla from '../../img/AhlawAhla.jpg';
import BanadeekTaala from '../../img/BanadeekTaala.jpg';
import ElLilady from '../../img/ElLilady.jpg';
import kolhayaty from '../../img/kolhayaty.jpg';
import Wayah from '../../img/Wayah.jpg';

import EishBeshoak from '../../img/EishBeshoak.jpg';
import EllyGaiAhla from '../../img/EllyGaiAhla.jpg';
import HaeeshHayati from '../../img/HaeeshHayati.jpg';
import OmryEbtada from '../../img/OmryEbtada.jpg';

import FatraMeshSahla from '../../img/FatraMeshSahla.jpg';
import Layalina from '../../img/Layalina.jpg';
import MalishDaawaBehad from '../../img/MalishDaawaBehad.jpg';
import MalnashEllaBaad from '../../img/MalnashEllaBaad.jpg';

import AgmalLayalyOmry from '../../img/AgmalLayalyOmry.jpg';
import WanaMaah from '../../img/WanaMaah.jpg';

import AnaAraby from '../../img/AnaAraby.jpg';
import AnTagreba from '../../img/AnTagreba.jpg';
import KollElKalam from '../../img/KollElKalam.jpg';
import MaretAyam from '../../img/MaretAyam.jpg';

import AslohAraby from '../../img/AslohAraby.jpg';
import WaafetNasyetZaman from '../../img/WaafetNasyetZaman.jpg';

import ElNafseya from '../../img/ElNafseya.jpg';
import ZayElFesoulElArbaa from '../../img/ZayElFesoulElArbaa.jpg';

import EshtMaakHekayat from '../../img/EshtMaakHekayat.jpg';
import Khayali from '../../img/Khayali.jpg';

import Esmaani from '../../img/Esmaani.jpg';
import Insan from '../../img/Insan.jpg';

import Far2Kteer from '../../img/Far2Kteer.jpg';

import KolYomMenDah from '../../img/KolYomMenDah.jpg';
import MnAlbyBaghany from '../../img/MnAlbyBaghany.jpg';
import OmroMaYegheeb from '../../img/OmroMaYegheeb.jpg';

// import ToolMantyGanby from '../../img/ToolMantyGanby.jpg';
// import YaNas from '../../img/YaNas.jpg';



/* Import Images */






const initialState = {
  artists: [
    {
      id: 1,
      nameEn: "Amr Diab",
      nameAr: "عمرو دياب",
      about: "Amr Abd El-Basset Abd El-Azeez Diab in Port Said, is an Egyptian multi-award winning pop singer-songwriter, regarded as the best selling Middle Eastern artist of all time.",
      aboutAr: "عمرو عبد الباسط عبد العزيز دياب من مواليد بورسعيد, مصرى الجنسية, حصل على جوائز عديدة ويتصدر دائماً اعلى المبيعات فى الشرق الأوسط",
      albums: [
        {
          id: 1,
          name: "Ahla W Ahla",
          nameAr: "أحلى و أحلى",
          img: AhlawAhla
        },
        {
          id: 2,
          name: "Banadeek Ta'ala",
          nameAr: "بناديك تعالى",
          img: BanadeekTaala
        },
        {
          id: 3,
          name: "ElLilady",
          nameAr: "الليلادى",
          img: ElLilady
        },
        {
          id: 4,
          name: "kol Hayaty",
          nameAr: "كل حياتى",
          img: kolhayaty
        },
        {
          id: 5,
          name: "Wayah",
          nameAr: "وياه",
          img: Wayah
        }
      ]

    },
    {
      id: 2,
      nameEn: "Tamer Hosny",
      nameAr: "تامر حسنى",
      about: "Tamer Hosny is an Egyptian singer, actor, composer, director and songwriter. He first came to public attention when he appeared on mix tapes with other Egyptian artists.",
      aboutAr: "تامر حسنى مطرب مصرى, ممثل, ملحن, مخرج, كتاب اغانى, يملك العديد من المواهب وله أعمال سينيمائية ودرامية كثيرة وحاصل على جوائز عديدة",
      albums: [
        {
          id: 1,
          name: "EishBeshoak",
          nameAr: "عيش بشوقك",
          img: EishBeshoak
        },
        {
          id: 2,
          name: "Elly Gai Ahla",
          nameAr: "اللى جاى أحلى",
          img: EllyGaiAhla
        },
        {
          id: 3,
          name: "Haeesh Hayati",
          nameAr: "هعيش حياتى",
          img: HaeeshHayati
        },
        {
          id: 4,
          name: "Omry Ebtada",
          nameAr: "عمرى ابتدى",
          img: OmryEbtada
        }
      ]
    },
    {
      id: 3,
      nameEn: "Ramy Gamal",
      nameAr: "رامى جمال",
      about: "Born: July 25, 1984 (age 34 years), Mansoura, Egypt",
      aboutAr: "المولد: 25 يوليو, 1984 ( 34 سنه ), المنصورة, مصر",
      albums: [
        {
          id: 1,
          name: "Fatra Mesh Sahla",
          nameAr: "فترة مش سهلة",
          img: FatraMeshSahla
        },
        {
          id: 2,
          name: "Layalina",
          nameAr: "ليالينا",
          img: Layalina
        },
        {
          id: 3,
          name: "Malish Daawa Behad",
          nameAr: "مليش دعوة بحد",
          img: MalishDaawaBehad
        },
        {
          id: 4,
          name: "Malnash Ella Baad",
          nameAr: "ملناش الا بعض",
          img: MalnashEllaBaad
        }
      ]
    },
    {
      id: 4,
      nameEn: "Ramy Sabry",
      nameAr: "رامى صبرى",
      about: "Born: March 15, 1978 (age 40 years), Cairo",
      aboutAr: "المولد: 15 مارس, 1978 ( 40 سنه ), القاهرة",
      albums: [
        {
          id: 1,
          name: "Agmal Layaly Omry",
          nameAr: "أجمل ليالى عمرى",
          img: AgmalLayalyOmry
        },
        {
          id: 2,
          name: "Wana Maah",
          nameAr: "وانا معاه",
          img: WanaMaah
        }
      ]
    },
    {
      id: 5,
      nameEn: "Karim Mohsen",
      nameAr: "كريم محسن",
      about: "Born: October 8, 1981 (age 37 years), Cairo",
      aboutAr: "المولد: 8 أكتوبر, 1981 ( 37 سنه ), القاهرة",
      albums: [
        {
          id: 1,
          name: "Ana Araby",
          nameAr: "أنا عربى",
          img: AnaAraby
        },
        {
          id: 2,
          name: "Maret Ayam",
          nameAr: "مرت أيام",
          img: MaretAyam
        },
        {
          id: 3,
          name: "An Tagreba",
          nameAr: "عن تجربة",
          img: AnTagreba
        },
        {
          id: 4,
          name: "Koll El Kalam",
          nameAr: "كل الكلام",
          img: KollElKalam
        },
      ]
    },
    {
      id: 6,
      nameEn: "Ahmed Mekky",
      nameAr: "أحمد مكى",
      about: "Ahmed Mekky is a son of an Egyptian mother and an Algerian father. He was raised as a boy in El-Talbia of El-Haram District, Giza, Egypt, where he filmed his song clip Wa'fet Nasyt Zaman. His sister is Enas Mekky, an Egyptian actress. He is divorced in 2013 and has a son named Adham. Mekky stopped his career for a period of time [when?] after suffering from Epstein Barr virus (EBV) infection. He caught the virus after sharing water bottles with his fellow trainees at boxing training.",
      aboutAr: "احمد مكى أبن لأم مصرية وأب جزائرى, نشأ فى منطقة الطالبية بمنطقة الهرم, الجيزة, مصر, حيث قام بتصوير كليب وقفة ناصية زمان, أخته ايناس مكى وهى ممثله مصرية. انفصل عن زوجتة فى 2013 ويملك منها ولد اسمه أدهم. مكى توقف عن العمل لفترة بعد معاناته من فيرس معين ثم تعافى من هذا المرض",
      albums: [
        {
          id: 1,
          name: "Asloh Araby",
          nameAr: "أصله عربى",
          img: AslohAraby
        },
        {
          id: 2,
          name: "Waafet Nasyet Zaman",
          nameAr: "وقفة ناصية زمان",
          img: WaafetNasyetZaman
        }
      ]
    },
    {
      id: 7,
      nameEn: "Mohamed El Sharnouby",
      nameAr: "محمد الشرنوبى",
      about: "Born: January 4, 1995 (age 24 years)",
      aboutAr: "المولد: 4 يناير, 1995 ( 24 سنه ), القاهرة, مصر",
      albums: [
        {
          id: 1,
          name: "ElNafseya",
          nameAr: "النفسية",
          img: ElNafseya
        },
        {
          id: 2,
          name: "Zay El Fesoul El Arbaa",
          nameAr: "زى الفصول الأربعة",
          img: ZayElFesoulElArbaa
        }
      ]
    },
    {
      id: 8,
      nameEn: "Tamer Ashour",
      nameAr: "تامر عاشور",
      about: "Tamer Ashor is an Egyptian singer and composer. From 2004 to 2011 he released more than 17 songs and 4 albums. Some of his more well-known songs include \"Zikrayat Kaddaba\", \"Ekhtarna Leh\", \"Thania Wahda\", and \"Enta Ekhtart\".",
      aboutAr: "تامر عاشور مطرب وملحن مصرى, خلال الفترة من 2004 حتى 2011 اصدر اكثر من 17 أغنيه و 4 ألبومات. بعض من اغنياته , ذكريات كدابه, اختارنا ليه, ثانيه واحده, انت اخترت",
      albums: [
        {
          id: 1,
          name: "Esht Maak Hekayat",
          nameAr: "عشت معاك حكايات",
          img: EshtMaakHekayat
        },
        {
          id: 2,
          name: "Khayali",
          nameAr: "خيالى",
          img: Khayali
        }
      ]
    },
    {
      id: 9,
      nameEn: "Hamza Namira",
      nameAr: "حمزه نمرة",
      about: "Hamza Namira is an Egyptian singer-songwriter, and multi-instrumentalist. He has released three albums: Dream With Me, Insan, and Esmaani produced by Awakening Records.",
      aboutAr: "حمزه نمره مطرب ومؤلف مصرى, وعازف, اصدر 3 البومات : احلم معايا, انسان, اسمعنى انتاج Awakening Records",
      albums: [
        {
          id: 1,
          name: "Esmaani",
          nameAr: "اسمعنى",
          img: Esmaani
        },
        {
          id: 2,
          name: "Ensan",
          nameAr: "انسان",
          img: Insan
        }
      ]
    },
    {
      id: 10,
      nameEn: "Hossam Habib",
      nameAr: "حسام حبيب",
      about: "Hossam Habib is an Egyptian singer and composer.",
      aboutAr: "حسام حبيب مطرب وملحن مصرى.",
      albums: [
        {
          id: 1,
          name: "Far2 Kteer",
          nameAr: "فرق كتير",
          img: Far2Kteer
        }
      ]
    },
    {
      id: 11,
      nameEn: "Mohamed Hamaki",
      nameAr: "محمد حماقى",
      about: "Mohamed Hamaki is an Egyptian singer. In 2010, he won the award \"Best Arabia Act\" in the MTV Europe Music Awards and music award in 2006 for \"Ahla Haga Fiki\"",
      aboutAr: "محمد حماقى مطرب مصرى. فى 2010 حصل على جائزة Best Arabia Act فى MTV Europe Music Awards وحصل على music award فى 2006 عن ألبوم احلى حاجه فيكى",
      albums: [
        {
          id: 1,
          name: "Kol Yom Men Dah",
          nameAr: "كل يوم من ده",
          img:KolYomMenDah
        },
        {
          id: 2,
          name: "Mn Alby Baghany",
          nameAr: "من قلبى بغنى",
          img:MnAlbyBaghany
        },
        {
          id: 3,
          name: "Omro Ma Yegheeb",
          nameAr: "عمره ما يغيب",
          img:OmroMaYegheeb
        }
      ]
    }
  ],
  language: "EN",
  searchValue: "",
  singleArtist: null,
  singleAlbum: null
}

const albumsReducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH:
            return {
                ...state,
                searchValue: action.payload
            }
        case CLICK:
            return {
                ...state,
                singleArtist: action.payload.artist,
                singleAlbum: action.payload.album
            }
          case CHANGE_LANGUAGE_TO_ARABIC:
            return {
              ...state,
              language: "عربى"
            }
          case CHANGE_LANGUAGE_TO_ENGLISH:
            return {
              ...state,
              language: "EN"
            }
        default:
            return state;
    }
}


export default albumsReducer;