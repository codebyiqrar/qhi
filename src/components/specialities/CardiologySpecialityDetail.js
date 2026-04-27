import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/constants/routes";
import BackgroundAccents from "../ui/BackgroundAccents";

const workflowCards = [
  {
    title: "The Huge Data Gap",
    icon: <svg width="54" height="33" viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.997 1.57673L17.4775 1.56535C18.1185 1.56212 19.634 1.46676 20.1018 1.78158C20.3488 2.54251 20.2106 8.949 20.2094 10.2626L20.2071 30.826L22.8734 30.8285C22.916 29.309 22.8752 27.5874 22.8742 26.0545L22.8693 16.8724C22.8687 16.0621 22.7903 11.9782 22.9875 11.4221C23.5312 11.0112 26.8781 11.3165 27.7474 11.2226C28.2414 11.1692 29.6639 11.1416 30.0536 11.4585C30.2153 11.9811 30.1464 16.3193 30.1458 17.3095L30.1386 30.8229C31.0319 30.8334 31.9413 30.825 32.8358 30.8251L32.8346 20.906C32.834 19.8267 32.7244 15.6704 32.9765 14.9951C33.3824 14.6788 35.0522 14.7987 35.6161 14.805C36.4909 14.8097 37.3656 14.8039 38.2408 14.7874C38.6539 14.7828 39.5634 14.713 39.846 14.9891C40.1136 15.6902 39.9897 19.8157 39.9879 20.8197L39.9813 30.8278L42.6646 30.8295C42.679 29.4292 42.5455 19.6484 42.7724 19.0791C42.9742 18.8954 43.3047 18.8172 43.5735 18.8225C45.4767 18.8598 47.3836 18.7634 49.2845 18.8258C50.0765 18.8517 49.9772 19.4411 49.964 20.0234L49.9538 30.8249C50.5902 30.8337 51.365 30.7464 51.9798 30.8284C53.282 31.0022 53.3478 32.2079 52.3336 32.9079L52.2522 32.9136C51.432 32.967 50.2921 32.9333 49.4443 32.9322L44.5272 32.9304L29.0777 32.9302L9.80613 32.9311L3.68197 32.9285C2.89133 32.9286 0.89197 33.1274 0.343202 32.6322C0.131262 32.4417 0.00727045 32.1723 0.000385395 31.8874C-0.0072181 31.6176 0.0979712 31.3569 0.290633 31.1679C0.799947 30.6639 2.31999 30.8189 3.08249 30.8274L3.08016 18.913C3.0792 18.0271 3.00652 14.0522 3.19379 13.3912C3.36879 13.2113 3.7707 13.143 4.01365 13.1458C5.8689 13.1676 7.72499 13.1313 9.57917 13.1487C9.68957 13.1518 10.1325 13.2259 10.178 13.3314C10.464 13.9958 10.3573 15.4532 10.3578 16.1228L10.3667 19.704L10.375 30.823L13.0534 30.8233L13.0567 11.8605L13.0468 5.44422C13.0434 4.36386 13.0303 3.28296 13.0366 2.20278C13.0403 1.58014 13.5271 1.5893 13.997 1.57673Z" fill="white" />
      <path d="M26.2515 0.0025709C26.2862 0.00149336 26.3209 0.000715042 26.3556 0.000236133C27.3998 -0.013293 27.5267 0.555471 27.5153 1.46684C27.5015 2.61921 27.5051 3.77883 27.5063 4.93156C27.765 4.67894 28.2804 4.14681 28.5714 4.00368C28.8378 3.87509 29.1444 3.85809 29.4228 3.95638C30.4064 4.29623 30.1873 5.3275 29.509 5.88124C28.7235 6.52232 27.5464 8.00335 26.6687 8.3821C26.4149 8.39384 26.0796 8.3818 25.8503 8.13594C25.4235 7.65416 22.782 5.54187 22.8983 4.95677C23.362 2.62298 25.1516 4.62416 25.536 4.98287C25.53 3.86617 25.5151 2.74678 25.5216 1.63032C25.5264 0.794687 25.4139 0.396234 26.2515 0.0025709Z" fill="white" />
    </svg>,
    description:
      "If you rely on patients to write down their own weight or blood pressure, you're going to get bad data. By the time a patient calls you with a problem, it's usually too late to keep them out of the ER.",
    image: "/speciality/cardiology/card-gap-photo.png",
  },
  {
    title: "Working for Free",
    icon: <svg width="60" height="42" viewBox="0 0 60 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M43.0643 20.9216C43.7456 20.8725 44.5347 20.9412 45.2154 20.9964C48.6376 21.2735 51.0941 22.9267 54.0295 24.4977L59.8854 27.6305C59.7291 28.1428 59.4962 28.7508 59.3023 29.2555C57.7917 33.1917 56.5177 37.2823 54.991 41.2047C51.8957 39.6756 49.762 37.8642 46.1644 37.3324C43.0098 36.8662 41.0383 37.5551 38.0867 38.4338L32.0836 40.2803C29.2577 41.1504 26.6753 42.3259 23.8156 40.9938C23.0881 40.6549 22.3795 40.2276 21.68 39.836L17.9246 37.7513L12.9994 35.04C12.3824 34.6974 11.0334 33.9858 10.525 33.5949C9.8819 33.1006 8.84573 31.9729 8.26098 31.3597L4.83037 27.7606C3.20185 26.072 1.59164 24.3657 0 22.6423C3.20185 19.2722 6.55804 22.5248 9.15401 24.6623C10.9218 26.1178 12.6712 27.5357 14.4111 29.0301C15.3183 29.018 15.7852 29.3544 16.5963 29.7547C17.0142 31.3834 18.252 32.6945 19.9844 32.8587C20.8497 32.9407 21.7177 32.9151 22.5864 32.9148L26.7643 32.9109L32.1967 32.9126C32.7894 32.9131 34.8903 33.0026 35.5393 32.785C35.6512 32.7474 35.6805 32.5365 35.6734 32.3908C35.5883 32.2719 35.5315 32.1502 35.3746 32.1354C34.5113 32.0542 33.3744 32.0979 32.511 32.0988L24.2746 32.1079C22.9255 32.1099 20.9981 32.224 19.7532 31.9961C17.5201 31.5873 16.6588 28.6183 18.2061 26.9818C19.7802 25.3169 22.0976 25.8699 24.1328 25.7646C26.3228 25.6512 28.4943 25.9821 30.6401 25.5358C31.977 25.2439 33.4612 24.3053 34.6316 23.6026C37.4114 21.9335 39.8331 21.1045 43.0643 20.9216Z" fill="white" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M38.1947 10.5658C37.7398 4.30096 32.2986 -0.41307 26.0323 0.0286766C19.7474 0.471724 15.0155 5.93201 15.4718 12.2153C15.9282 18.4987 21.399 23.2184 27.682 22.749C33.9465 22.2809 38.6499 16.8305 38.1947 10.5658ZM26.5587 18.4104C26.7464 18.4032 26.8176 18.4059 27.0034 18.43C27.1549 18.6008 27.1143 20.5588 27.0954 21.4446V21.4624L27.0917 21.6321L27.0888 21.8055L27.0245 21.8059C26.9796 21.8064 26.9344 21.8068 26.8898 21.8054C26.8384 21.8038 26.7876 21.7998 26.7394 21.7904L26.7131 21.7847L26.6847 21.777L26.6639 21.7703C26.6303 21.7584 26.5985 21.7427 26.5689 21.722C26.5036 21.1516 26.527 19.0306 26.5587 18.4104ZM32.2686 20.1693C32.1051 19.839 30.7511 17.5673 30.5379 17.3594L30.4952 17.3834L30.4536 17.4059C30.3243 17.4757 30.1863 17.5502 30.1319 17.6662C30.2827 18.0051 31.6466 20.3997 31.8773 20.4862C31.9324 20.4537 31.9777 20.4298 32.0164 20.4095C32.1361 20.3468 32.1923 20.3173 32.2686 20.1693ZM33.0462 14.7159C34.0187 15.2724 34.9946 15.8214 35.9751 16.3629L35.6717 16.8528C35.5619 16.7914 35.4224 16.7148 35.264 16.628L35.2176 16.6024C34.4324 16.1715 33.228 15.5106 32.8319 15.1891C32.8199 15.0256 32.9524 14.8669 33.0462 14.7159ZM34.3455 11.1305L34.34 11.1305L34.0425 11.1344L33.8928 11.1359C33.8932 11.1681 33.8928 11.1994 33.8924 11.23C33.8913 11.3794 33.8902 11.5105 33.9819 11.6262C34.4167 11.6982 35.9379 11.6775 36.8166 11.6656C37.0126 11.6629 37.1769 11.6607 37.2897 11.66L37.289 11.5996V11.5648C37.2886 11.4176 37.2886 11.2782 37.205 11.165C36.7155 11.0988 35.2311 11.1186 34.3455 11.1305ZM26.4671 5.87547L26.57 5.87205L26.6558 5.86908C26.6898 5.86812 26.7234 5.86758 26.757 5.8679L26.7942 5.8686C26.8289 5.86967 26.8636 5.87187 26.8979 5.87572C26.9683 5.88362 27.0377 5.89851 27.106 5.92498C27.176 6.18301 27.1622 8.53412 27.1563 9.54159V9.55649L27.1545 9.92555L27.1819 9.93739L27.2425 9.96459C27.8817 10.2591 28.081 10.4682 28.3271 11.1289L30.9245 11.1342L30.9584 11.7931C30.3565 11.8016 29.7435 11.7998 29.1339 11.7981L28.6684 11.7969L28.2986 11.7966C27.4509 13.3976 25.4562 13.1139 25.319 11.3658L25.3172 11.0119C25.0853 10.7499 23.118 9.23426 22.1955 8.52355L21.7983 8.21711L22.3572 7.6047C23.0147 8.16682 23.7437 8.72488 24.4625 9.27494L24.4669 9.27816L24.4834 9.29103C24.894 9.60518 25.3011 9.91676 25.6895 10.225C25.8125 10.1696 25.9191 10.1272 26.025 10.0895C26.1009 10.0624 26.1765 10.0377 26.2576 10.0122L26.4543 9.95179C26.4689 9.01244 26.4678 8.0589 26.4667 7.11017V6.70493C26.4664 6.42765 26.4664 6.151 26.4671 5.87547ZM27.3078 10.8084C27.0939 10.624 26.7949 10.5743 26.5324 10.6793C26.163 10.8274 25.9713 11.2363 26.094 11.615C26.217 11.9936 26.612 12.2124 26.9983 12.1154C27.2721 12.0467 27.4853 11.831 27.5502 11.556C27.6156 11.2811 27.5218 10.9928 27.3078 10.8084ZM35.9025 6.3012C35.8185 6.17147 35.7188 6.01755 35.6155 5.93799C35.3914 6.06498 35.1548 6.19684 34.9128 6.33182C34.1801 6.74023 33.3963 7.17721 32.752 7.59406L32.8213 7.68925L32.8349 7.70792C32.9185 7.82309 33.0254 7.96996 33.0787 8.02896C33.3197 7.89271 33.5657 7.75508 33.8139 7.61629C34.5349 7.21301 35.2731 6.80006 35.9561 6.3832C35.939 6.35778 35.9211 6.33008 35.9025 6.3012ZM31.8594 2.26807L31.897 2.28564C31.9934 2.33073 32.0876 2.37479 32.1522 2.44426C32.1858 2.48052 32.2117 2.52369 32.2256 2.57753C32.0142 3.09423 31.2768 4.28189 30.8172 5.02205C30.7237 5.17243 30.6419 5.30436 30.5784 5.40842L30.133 5.13504L31.8225 2.25014L31.8594 2.26807ZM26.6146 0.947261L26.5459 0.950752L26.543 1.25843C26.5328 2.09625 26.5102 4.02922 26.5861 4.27479C26.6788 4.31609 26.7555 4.33147 26.834 4.33573C26.8895 4.33875 26.9461 4.33628 27.0099 4.33348L27.095 4.33017C27.0957 4.1519 27.099 3.92495 27.1027 3.67192C27.1162 2.79107 27.1341 1.59415 27.068 1.03431C27.0552 1.02196 27.0428 1.01126 27.0304 1.002C27.0202 0.994194 27.0099 0.987418 26.9997 0.981509C26.9804 0.970648 26.961 0.962754 26.9406 0.957072C26.884 0.941329 26.8205 0.942493 26.7365 0.944021L26.6923 0.944751L26.6146 0.947261ZM21.7458 2.26979L21.8316 2.28051C22.0407 2.46014 23.3498 4.73497 23.5159 5.08769C23.494 5.13668 23.4681 5.17273 23.4378 5.20243C23.3944 5.24485 23.3418 5.27435 23.2779 5.31015L23.2403 5.33135C23.2173 5.34437 23.1932 5.35854 23.1677 5.37456L23.0823 5.35683C22.9377 5.19041 21.5384 2.78977 21.4161 2.54379C21.4599 2.42051 21.5209 2.389 21.6286 2.33349C21.6625 2.3159 21.7012 2.29589 21.7458 2.26979ZM20.8426 7.54711C19.9256 7.01432 18.9001 6.38792 17.9699 5.90009C17.9422 5.9512 17.9166 5.99364 17.8936 6.03153C17.8199 6.15337 17.7746 6.22816 17.7812 6.39276C18.04 6.58426 20.3596 7.98808 20.5589 8.00054L20.8426 7.54711ZM16.7192 11.1343C17.5877 11.1174 19.5601 11.0792 19.7266 11.2271C19.7573 11.4286 19.7551 11.4539 19.704 11.6515C19.5886 11.6522 19.4302 11.6542 19.2444 11.6566C18.3653 11.668 16.8758 11.6873 16.4498 11.6059C16.3976 11.5245 16.3805 11.4641 16.3764 11.3964C16.375 11.3748 16.375 11.3524 16.3754 11.3284L16.3772 11.2767C16.3786 11.2372 16.3805 11.1926 16.3801 11.1401C16.4447 11.1396 16.552 11.1375 16.6904 11.1348L16.7127 11.1344L16.7192 11.1343ZM20.6856 14.8502C20.6645 14.8367 20.6466 14.8254 20.6276 14.8157C20.6024 14.8029 20.5746 14.7928 20.5341 14.7842C19.5758 15.3232 18.6139 15.8563 17.649 16.3836C17.6647 16.4111 17.6801 16.4397 17.6958 16.4687C17.7757 16.6165 17.8604 16.7742 18.0039 16.8323C18.0868 16.7862 18.2032 16.7229 18.3419 16.6476C19.1049 16.2325 20.5418 15.4509 20.7919 15.1451C20.817 14.9769 20.8243 15.0448 20.7327 14.8793L20.6856 14.8502ZM23.0852 17.3915C23.2557 17.464 23.4787 17.5315 23.5232 17.711C23.2768 18.2688 22.5573 19.4104 22.0904 20.1511L21.875 20.4942C21.8002 20.4772 21.6888 20.4085 21.5859 20.3385C21.5158 20.2909 21.4497 20.2428 21.4019 20.2102L23.0852 17.3915Z" fill="white" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4679 6.30615C26.4679 7.24258 26.472 8.18898 26.465 9.12689C26.4709 8.32188 26.4683 7.5106 26.4683 6.70478C26.4683 6.57173 26.4679 6.43885 26.4679 6.30615ZM27.3094 10.8083C27.0955 10.6238 26.7965 10.5741 26.534 10.6791C26.1646 10.8272 25.9729 11.2362 26.0956 11.6148C26.2186 11.9935 26.6136 12.2122 26.9998 12.1153C27.2736 12.0465 27.4868 11.8308 27.5518 11.5559C27.6172 11.281 27.5233 10.9927 27.3094 10.8083Z" fill="white" />
      <path d="M26.534 10.6793C26.7963 10.5742 27.0952 10.624 27.3093 10.8084C27.5234 10.9928 27.6169 11.2811 27.5517 11.556C27.4866 11.8309 27.2737 12.0466 26.9997 12.1154C26.6136 12.2123 26.2184 11.9936 26.0956 11.615C25.9729 11.2363 26.1645 10.8273 26.534 10.6793Z" fill="white" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0898 21.6533C27.0909 21.5981 27.0924 21.5339 27.0939 21.4624C27.0971 21.298 27.1015 21.0946 27.1052 20.8716C27.1015 21.0866 27.0971 21.2834 27.0939 21.4446V21.4624L27.0902 21.6321L27.0898 21.6533Z" fill="white" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M31.8999 2.28603C31.8849 2.27913 31.8704 2.27218 31.8555 2.26514L31.8614 2.26807L31.8999 2.28603Z" fill="white" />
      <path d="M5.11897 16.4173C5.53399 16.386 5.91225 16.3963 6.31973 16.4898C7.01081 16.6478 7.64082 17.0038 8.13259 17.5143C8.82571 18.2281 10.3369 20.7855 10.9496 21.7622L15.0444 28.1936C14.6964 27.9729 14.3504 27.7135 14.0151 27.4717C11.0724 25.2124 8.23503 22.4084 4.99409 20.6421C4.46813 19.4771 3.96738 18.3009 3.49219 17.1143C4.09975 16.7368 4.42502 16.5789 5.11897 16.4173Z" fill="white" />
      <path d="M9.84962 17.9236C10.4845 17.8778 10.9509 17.883 11.5815 18.0801C12.1798 18.2631 12.7176 18.6044 13.1377 19.0681C13.8398 19.8538 14.6205 21.5299 15.1265 22.527C15.8319 23.9378 16.5506 25.3418 17.2827 26.7389C16.9813 27.2912 16.7811 27.6601 16.6292 28.2711C16.5974 28.4219 16.5754 28.6388 16.4728 28.738C16.425 28.7007 16.3264 28.6185 16.2938 28.5692C14.0724 25.2066 11.9188 21.7927 9.77891 18.3769C9.69485 18.2427 9.65528 18.1458 9.67157 17.991L9.84962 17.9236Z" fill="white" />
    </svg>
    ,
    description:
      "Your nurses spend half their day on the phone or checking charts. If you aren't tracking those minutes automatically, you're just giving away clinical labor for free.",
    image: "/speciality/cardiology/card-workfree-photo.png",
  },
  {
    title: "The Audit Nightmare",
    icon: <svg width="45" height="39" viewBox="0 0 45 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.21933 5.8228C6.53683 5.78331 7.93574 5.79104 9.30326 5.7986C9.85487 5.80165 10.4014 5.80467 10.9354 5.80455L21.1393 5.80341C21.1393 6.0013 21.1356 6.35725 21.1309 6.81426C21.1079 9.0091 21.0611 13.5346 21.2831 14.0715C21.5302 14.2475 26.6064 14.2085 28.6358 14.1929C28.9819 14.1902 29.2392 14.1882 29.3688 14.1881C29.3692 14.7559 29.3714 15.3303 29.3739 15.9096C29.3772 16.589 29.3816 17.275 29.386 17.9645C29.405 20.9678 29.4243 24.0375 29.3553 26.9207C29.0162 27.2406 28.6818 27.565 28.351 27.8936L27.1657 26.6945C27.5034 26.2389 27.7589 25.8142 27.9867 25.2951C28.7103 23.6883 28.7504 21.8569 28.0992 20.2197C27.4107 18.522 26.0822 17.1634 24.3996 16.4373C22.8145 15.763 21.0257 15.7455 19.4275 16.3887C15.8645 17.8261 14.3375 21.7644 15.7769 25.2882C16.0397 25.8897 16.3895 26.4494 16.8148 26.9493C17.9428 28.2969 19.5677 29.1314 21.32 29.2631C23.2844 29.4117 24.837 28.8056 26.3049 27.5446L27.4997 28.7204L27.3555 28.8588C26.8915 29.3034 26.2373 29.9304 25.911 30.3818C26.1545 30.7376 26.7722 31.3496 27.1996 31.7731L27.2372 31.8102C27.3095 31.8817 27.3756 31.9472 27.4322 32.0042L29.8989 34.487L11.7565 34.4846C11.2439 34.4851 10.7157 34.49 10.179 34.4949H10.1758H10.1725C8.43478 34.5108 6.60911 34.5275 4.94115 34.4015C4.85426 34.395 4.5728 34.0732 4.56514 33.9983C4.43152 32.6769 4.44759 31.274 4.46365 29.9038V29.8952C4.46657 29.6436 4.46949 29.3932 4.47132 29.1445L4.47278 28.8877L4.47351 28.6555V20.2061L4.47314 11.6508L4.47132 10.5701V10.4567L4.46949 9.0883C4.46912 8.33335 4.47022 7.57845 4.4757 6.82367C4.48008 6.22024 4.70349 6.03324 5.21933 5.8228ZM13.1141 13.31C11.4203 13.2896 9.72491 13.2692 8.05074 13.3194C7.75723 13.5219 7.50461 13.8141 7.76344 14.2045C7.90289 14.4146 8.20479 14.4338 8.42712 14.438L8.82941 14.4355C9.08057 14.4345 9.33247 14.4343 9.58509 14.4346C9.88663 14.435 10.1889 14.4361 10.4915 14.4372C11.4155 14.4405 12.3406 14.4439 13.2521 14.4274C13.8873 14.416 14.5514 14.4242 15.2165 14.4324C16.0857 14.4431 16.9571 14.4538 17.7698 14.4208C18.0684 14.2066 18.2681 13.9867 18.106 13.5963C17.895 13.3614 17.6851 13.3139 17.3744 13.3195C15.9638 13.3443 14.5393 13.3272 13.1141 13.31ZM7.96604 9.17762C8.03979 9.17349 8.11353 9.17032 8.18727 9.16822C10.1999 9.12261 12.2442 9.14285 14.2805 9.163L14.286 9.16307L15.4173 9.17381C15.7444 9.17669 16.0708 9.17924 16.3968 9.18121C16.6687 9.18283 16.94 9.18406 17.2112 9.1847L17.673 9.18522C18.2436 9.18511 18.321 9.84737 17.796 10.2597C16.0821 10.3439 14.2907 10.3109 12.5034 10.2779C11.049 10.251 9.59677 10.2242 8.19165 10.2607C7.60682 10.276 7.49183 9.63792 7.96604 9.17762ZM10.8811 17.4777C9.90817 17.4674 8.93455 17.457 7.97298 17.4916L7.93793 17.5254C7.76964 17.6884 7.68933 17.7662 7.67071 18.0329C7.651 18.3112 7.931 18.5537 8.18691 18.559C9.55406 18.5874 10.9234 18.5813 12.292 18.5752L12.8527 18.5728C13.2795 18.5711 13.7063 18.5699 14.1327 18.5701C14.1732 18.5701 14.2268 18.5625 14.2721 18.5561L14.2991 18.5523C15.1975 17.6938 14.2239 17.4538 13.4635 17.4737C12.6093 17.496 11.7455 17.4868 10.8811 17.4777ZM8.01606 21.6277L10.9548 21.6128C11.0399 21.6126 11.1406 21.61 11.252 21.607C11.8645 21.5907 12.7984 21.5657 13.1879 21.906C13.4843 22.1653 13.1784 22.5118 12.9422 22.7129L9.87604 22.7307L9.71651 22.7319L9.4774 22.7355C9.05173 22.7425 8.60198 22.75 8.20698 22.7022C7.48672 22.615 7.51738 22.0321 8.01606 21.6277ZM11.5915 25.7446L7.96604 25.7455C7.51373 26.1913 7.54294 26.8353 8.20589 26.8384C8.62534 26.8403 9.04735 26.8432 9.47046 26.8461C10.9234 26.8561 12.3931 26.8662 13.8307 26.8369C13.8917 26.792 13.9487 26.7497 13.9994 26.7048C14.052 26.6581 14.098 26.6084 14.1337 26.55C14.1524 26.5195 14.1684 26.4866 14.1812 26.4504C14.1954 26.4109 14.2057 26.3676 14.2115 26.3192C14.2973 25.6134 12.7604 25.6903 11.9481 25.731C11.8006 25.7383 11.6773 25.7445 11.5915 25.7446ZM8.04599 29.8949L8.80714 29.8911C9.96439 29.8852 11.1224 29.8793 12.2796 29.8857C12.6286 29.8875 13.1408 29.9067 13.251 30.3249C13.3452 30.6816 13.1035 30.872 12.8177 31.0022C12.1858 30.9878 11.506 30.9961 10.819 31.0044C9.91876 31.0154 9.0061 31.0265 8.1723 30.987C7.6437 30.9618 7.38012 30.321 8.04599 29.8949Z" fill="white" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4035 9.18103C16.333 9.18062 16.2622 9.18017 16.1914 9.17969C16.2593 9.18014 16.3272 9.18058 16.3951 9.18099C16.398 9.18099 16.4006 9.18103 16.4035 9.18103Z" fill="white" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7578 18.5733C13.1013 18.5719 13.4445 18.5707 13.7876 18.5703C13.4763 18.5707 13.1645 18.5717 12.8527 18.5729L12.7578 18.5733Z" fill="white" />
      <path d="M31.6641 0.00652566L44.9414 0C44.8618 0.841683 44.6774 1.92072 44.5547 2.77504L43.8003 7.94169C42.937 13.7741 41.9701 19.8606 41.2145 25.698C41.0086 26.9674 40.8541 28.2476 40.6422 29.5132C39.1029 29.4691 37.3864 29.5078 35.8364 29.5101C35.7526 28.5555 35.5376 27.2808 35.4047 26.3113C35.0928 24.014 34.7677 21.7186 34.4295 19.4251L31.6641 0.00652566Z" fill="white" />
      <path d="M0.778904 9.89717C1.60002 9.85263 2.47903 9.8734 3.30524 9.87789L3.30308 26.4274L3.29871 31.3237C3.29704 32.163 3.22932 33.2549 3.33948 34.0648C3.5998 35.9793 5.85199 35.6481 7.14458 35.6481H11.4298C16.0814 35.6475 20.8395 35.6978 25.4812 35.6389C25.4854 36.3583 25.5237 37.638 25.4489 38.3052C25.2339 38.6651 25.1088 38.7668 24.7478 38.9741C24.0653 39.0296 22.6512 38.987 21.9273 38.9866L16.428 38.9872C11.478 38.9878 6.52056 38.9902 1.57003 38.9835C1.26223 38.9831 0.786925 38.9599 0.491467 38.881C0.398728 38.8563 0.199123 38.6041 0.151048 38.5011C0.0713008 38.3301 0.0172377 38.1368 0.0172976 37.9432C0.0176568 36.7407 0.0190935 35.5291 0.019333 34.3274L0.0204109 26.9249L0.0194535 16.837C0.0184956 15.0253 -0.0667605 12.2772 0.127398 10.4134C0.146676 10.2279 0.597438 9.98146 0.778904 9.89717Z" fill="white" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M27.356 22.0207C27.0307 18.9825 24.3019 16.7849 21.2642 17.1154C18.2342 17.4452 16.0439 20.1652 16.3677 23.195C16.6915 26.2248 19.4075 28.4204 22.4383 28.1024C25.4778 27.7836 27.6802 25.0587 27.356 22.0207ZM21.9914 18.331C23.3236 18.4837 24.8046 19.3035 25.5329 20.4422C25.8071 20.8717 25.4712 21.2317 25.0904 21.402C24.7593 21.3148 24.5348 21.0307 24.2994 20.7329C24.1493 20.5429 23.9949 20.3474 23.8054 20.1939C23.498 19.9449 23.064 19.8041 22.6427 19.6677C22.1703 19.5146 21.7147 19.3669 21.4734 19.0775C21.3716 18.6577 21.6041 18.5353 21.9239 18.3667L21.9914 18.331Z" fill="white" />
      <path d="M35.1562 32.9184L41.3702 32.9116C41.3312 34.8859 41.3731 36.9916 41.3779 38.9761H35.1712L35.1562 32.9184Z" fill="white" />
      <path d="M22.2891 5.98242C22.8057 6.41182 23.7948 7.51403 24.3211 8.03401L29.3849 13.0492C27.2218 12.9662 24.5037 13.0386 22.3106 13.0462C22.3166 10.6915 22.31 8.33692 22.2891 5.98242Z" fill="white" />
      <path d="M29.7209 28.0576C29.7431 28.0673 29.7652 28.0776 29.7862 28.0889C30.0999 28.257 33.8849 32.1212 33.931 32.3377C33.9866 32.6013 33.8286 32.9037 33.6771 33.109C33.276 33.6539 32.4737 34.4557 31.7966 34.5659C31.2524 34.3863 27.9595 30.9566 27.4297 30.3187C28.014 29.6651 29.0647 28.6963 29.7209 28.0576Z" fill="white" />
    </svg>
    ,
    description:
      "Trying to hit the 20-minute billing mark for CPT 99457 with a manual stopwatch is a mess. If you can't prove the work with a real, timestamped log, you're going to fail a Medicare audit.",
    image: "/speciality/cardiology/card-audit-photo.png",
  },
];

const quantusToolsCards = [
  {
    title: "ChargeCapture: Stop Ignoring Your Revenue",
    points: [
      {
        heading: "Automated Timers:",
        text: "The second a nurse opens a chart to check an alert, the timer starts. It's all handled in the background.",
      },
      {
        heading: "Real Evidence:",
        text: "Every second is logged. You don't have to guess if you hit 20 minutes. The system tells you exactly when you can bill.",
      },
    ],
  },
  {
    title: "QRPM: Monitoring That Seniors Actually Use",

    points: [
      {
        heading: "No-Setup Hardware",
        text: "We use cellular scales and BP cuffs. No Wi-Fi. No apps. No pairing. The patient just uses the device and the data shows up on your screen.",
      },
      {
        heading: "Tracking the 16-Day Rule:",
        text: "The software keeps an eye on the monthly reading count for you. If someone falls behind, it flags them so you don't lose your billing eligibility for the month.",
      },
    ],
  },
  {
    title: "QRCM: Clean Claims for Cardiology",

    points: [
      {
        heading: "Pre-Submission Checks:",
        text: "Cardiology claims get denied for tiny errors all the time. Our QRCM tool is like a high-speed filter for your billing team.",
      },
      {
        heading: "Fewer Denials:",
        text: "We catch missing signatures or wrong codes early. This keeps your cash flow moving instead of waiting for rejections.",
      },
    ],
  },
];

const setupSteps = [
  {
    title: "Devices That Work",
    text: "We don't just mail a box and hope for the best. Every device is tested before it hits the patient's house. Since it's cellular, there is no Wi-Fi to troubleshoot.",
  },
  {
    title: "Background Work",
    text: "Your team doesn't need to learn a whole new EHR. They just log in and let the software handle the time-tracking while they work.",
  },
];

const liveDataPoints = [
  {
    title: "Closing the Gap",
    text: "With daily cellular syncs, you see the trends as they happen. If a patient's weight spikes on a Tuesday, you know it on Tuesday.",
    icon: "/speciality/cardiology/live-data-icon-1.svg",
  },
  {
    title: "Stopping Readmissions",
    text: "By catching the early signs of distress, our practices stay ahead of the curve. This keeps your patients out of the hospital and saves the clinic from administrative headaches.",
    icon: "/speciality/cardiology/live-data-icon-2.svg",
  },
];

export default function CardiologySpecialityDetail() {
  return (
    <main className="overflow-hidden bg-white font-dm-sans text-[#10172A]">
      <BackgroundAccents className="bg-white">
        <section className="relative mx-auto w-full max-w-[1440px] px-4 pb-16 pt-24 sm:px-6 lg:px-[70px] lg:pb-0 lg:pt-[150px]">

          <div className="relative z-10 grid gap-6 lg:grid-cols-[718px_535px] lg:items-start lg:gap-[47px]">
            <div>
              <h1 className="max-w-[718px] font-syne text-[40px] font-semibold leading-[1.08] sm:text-[54px] lg:text-[65px] lg:leading-[1.2]">
                Cardiology Practice Management Software
              </h1>
              <p className="mt-5 max-w-[711px] text-[18px] leading-[1.28] text-[#10172A]">
                Automated revenue and clinical oversight for the modern heart clinic.
              </p>
            </div>

            <div className="pt-2 lg:pt-[29px]">
              <div className="inline-flex rounded-2xl bg-[#2847C5] px-6 py-1.5 text-[16px] text-white lg:flex lg:h-[31px] lg:w-full lg:items-center lg:justify-center lg:px-0 lg:py-0">
                Why Cardiology Clinics Need Smarter Workflow
              </div>
              <p className="mt-5 text-[16px] leading-[1.375] text-[#464646] lg:mt-6">
                Clinicians spend hours every week reviewing charts and managing heart failure patients without receiving proper reimbursement. Manual data logs often lead to missed warnings and failed Medicare audits.
              </p>
              <p className="mt-[18px] text-[16px] leading-[1.375] text-[#464646]">
                Quantus Health fixes your workflow with cellular-connected devices and automated timers. We capture every billable minute between visits, so your practice finally gets paid for its services.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-[27px]  rounded-2xl bg-[#101A30] px-5 pb-8 pt-6 sm:px-6 lg:h-[500px] lg:px-0 lg:pb-0 lg:pt-0">
            <div className="pointer-events-none absolute left-[11%] top-0 h-[501px] w-[80%] rounded-[999px] bg-[#0D94E4]/20 lg:left-[143px] lg:w-[1157px]" />

            <div className="relative lg:absolute lg:left-[22px] lg:top-[62px] lg:w-[221px]">
              <div className="hidden lg:block">
                <div className="relative h-[268px] w-[221px]">
                  <div className="absolute left-[10px] top-[17px] h-[251px] w-px bg-[#0D94E4]" />
                  {[
                    ["QRCM", "Specialty Billing"],
                    ["QRPM", "Remote Monitoring"],
                    ["ChargeCapture", "Time Tracking"],
                  ].map((item, index) => (
                    <div key={item[0]} className={`relative pl-[37px] ${index > 0 ? "mt-[38px]" : ""}`}>
                      <div className="absolute left-0 top-[7px] h-5 w-5 rounded-full border border-[#0D94E4] bg-[#10172A]" />
                      <p className="text-[24px] leading-[1.29] text-white">{item[0]}</p>
                      <p className="mt-[6px] text-[18px] leading-[1.28] text-white">{item[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Image
              src="/speciality/cardiology/hero-monitor-hq.png"
              alt="Cardiology monitoring dashboard"
              width={992}
              height={557}
              className="relative z-10 mt-6 h-auto w-full lg:absolute lg:right-[29px] lg:top-[-56px] lg:mt-0 lg:w-[992px]"
              sizes="(max-width: 1024px) 100vw, 992px"
            />

            <div className="relative mt-7 flex flex-wrap gap-4 lg:absolute lg:bottom-[31px] lg:left-[22px] lg:mt-0">
              <Link
                href={ROUTES.REQUEST_DEMO}
                className="inline-flex h-[54px] items-center gap-5 rounded-full bg-[#0D94E4] pl-[26px] pr-[10px] text-[18px] text-[#F3F3F3]"
              >
                Request a Live Demo
                <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-black">
                  <span aria-hidden>→</span>
                </span>
              </Link>
              <Link
                href={ROUTES.CONTACT}
                className="inline-flex h-[54px] items-center gap-5 rounded-full border border-[#DEDEDE] bg-white pl-[26px] pr-[10px] text-[14px] text-[#10172A]"
              >
                Get Custom Pricing
                <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#0D94E4] text-white">
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </BackgroundAccents>

      <section className="mx-auto w-full max-w-[1440px] px-4 pb-16 pt-5 sm:px-6 lg:px-[70px] lg:pb-[75px] lg:pt-[75px]">
        <div className="mx-auto max-w-[1168px]">
          <h2 className="mx-auto max-w-[791px] text-center font-syne text-[32px] font-semibold leading-[1.2] sm:text-[38px]">
            Why Manual Cardiology Workflows Are Costing You
          </h2>
          <p className="mx-auto mt-6 max-w-[1168px] text-center text-[16px] leading-[1.375] text-[#464646]">
            Most cardiology groups are losing money every month because of "revenue leakage." When you're dealing with heart failure or hypertension, the work doesn't stop when the patient leaves the office.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-[351px_351px_351px] lg:justify-between lg:gap-0">
            {workflowCards.map((card) => (
              <article key={card.title} className="relative rounded-2xl">
                <div className="absolute inset-x-0 top-1 h-full rounded-2xl bg-[#2847C5]" />
                <div className="relative overflow-hidden rounded-2xl bg-[#F6FCFE]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={351}
                    height={183}
                    className="h-[183px] w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 351px"
                  />
                  <div className="relative px-[18px] pb-[26px] pt-6">
                    <div className="absolute left-[18px] top-[-57px] h-[114px] w-[114px] rounded-full bg-white" />
                    <div className="absolute left-[31px] top-[-44px] h-[88px] w-[88px] rounded-full bg-[#2847C5] flex items-center justify-center" >
                      {card.icon}
                    </div>
                    <h3 className="relative mt-[57px] text-[24px] leading-[1] text-[#10172A]">{card.title}</h3>
                    <p className="mt-4 text-[16px] leading-[1.3125] text-[#464646]">{card.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 lg:px-[70px] lg:py-[75px]">
        <h2 className="mx-auto max-w-[755px] text-center font-syne text-[32px] font-semibold leading-[1.2] sm:text-[38px]">
          Fixing the Clinic with Quantus Tools
        </h2>
        <p className="mx-auto mt-6 max-w-[1168px] text-center text-[16px] leading-[1.375] text-[#464646]">
          We don't try to replace your whole office. We just add a layer that handles the monitoring and the boring paperwork so your team can focus on the hearts.
        </p>

        <div className="mt-[24px] grid gap-7 lg:grid-cols-[415px_414px_414px]">
          {quantusToolsCards.map((card, cardIndex) => (
            <article key={card.title} className="h-[472px] rounded-2xl bg-white px-7 pb-6 pt-7">
              <h3 className="min-h-[60px] max-w-[397px] text-[24px] leading-[1.25] text-[#10172A]">{card.title}</h3>
              <div className="relative mt-[23px] space-y-[23px]">
                <span
                  className={`absolute left-[6px] top-[13px] border-l border-dashed border-[#10172A] ${cardIndex === 0 ? "h-[204px]" : cardIndex === 1 ? "h-[220px]" : "h-[178px]"
                    }`}
                />
                {card.points.map((point) => (
                  <div key={point.heading} className="relative pl-[27px]">
                    <span className="absolute left-0 top-[8px] h-[12px] w-[12px] rounded-full border border-[#10172A] bg-[#0D94E4]" />
                    <div className="max-w-[340px]">
                      <p className="text-[18px] leading-[1.35] text-[#10172A]">{point.heading}</p>
                      <p className="mt-[8px] text-[16px] leading-[1.3125] text-[#464646]">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#10172A]">
        <div className="pointer-events-none absolute right-[62px] top-[106px] hidden h-[474px] w-[559px] rounded-full bg-[#0D94E4]/20 lg:block" />
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[637px_1fr] lg:items-start lg:gap-[37px] lg:px-[70px] lg:pb-[89px] lg:pt-[85px]">
          <div>
            <h2 className="max-w-[435px] font-syne text-[32px] font-semibold leading-[1.2] text-white sm:text-[38px]">
              Easy Setup for Busy Heart Teams
            </h2>
            <p className="mt-6 max-w-[609px] text-[16px] leading-[1.375] text-[#E2E2E2]">
              Most doctors are scared to switch software because they don't want a "training nightmare." We get that.
            </p>

            <div className="mt-[38px] flex gap-[27px]">
              <div className="relative h-[152px] w-[69px] shrink-0">
                <div className="absolute left-0 top-[10px] h-[132px] w-[51px] border border-[#2847C5] bg-[#2847C5]" />
                <div className="absolute left-[47px] top-0 h-[22px] w-[22px] rounded-full border border-[#2847C5] bg-[#2847C5]" />
                <div className="absolute left-[47px] top-[130px] h-[22px] w-[22px] rounded-full border border-[#2847C5] bg-[#2847C5]" />
                <div className="absolute left-[54px] top-[7px] h-[8px] w-[8px] rounded-full bg-[#5372EF]" />
                <div className="absolute left-[54px] top-[137px] h-[8px] w-[8px] rounded-full bg-[#5372EF]" />
              </div>
              <div className="space-y-[27px]">
                {setupSteps.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-[18px] leading-[1.39] text-white">{item.title}</h3>
                    <p className="mt-3 max-w-[512px] text-[16px] leading-[1.375] text-[#E2E2E2]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[661px] lg:mx-0 lg:min-h-[564px] lg:max-w-none">
            <div className="absolute left-0 top-[115px] hidden h-[55px] w-[170px] items-center justify-center rounded-[8px] bg-[#D9D9D9] text-[14px] text-[#10172A] lg:flex">
              Device setup checklist
            </div>
            <div className="absolute left-[456px] top-[169px] hidden h-[55px] w-[170px] items-center justify-center rounded-[8px] bg-[#D9D9D9] text-[14px] text-[#10172A] lg:flex">
              Team onboarding status
            </div>
            <div className="absolute left-[127px] top-[192px] hidden h-[224px] w-[178px] border border-white lg:block" />
            <div className="absolute left-[481px] top-[256px] hidden h-[154px] w-[123px] border border-white lg:block" />
            <div className="absolute left-[111px] top-[174px] hidden h-[34px] w-[34px] rounded-full bg-[#0D94E4] lg:block" />
            <div className="absolute left-[120px] top-[183px] hidden h-[16px] w-[16px] rounded-full bg-[#0D94E4] lg:block" />
            <div className="absolute left-[469px] top-[232px] hidden h-[34px] w-[34px] rounded-full bg-[#0D94E4] lg:block" />
            <div className="absolute left-[478px] top-[241px] hidden h-[16px] w-[16px] rounded-full bg-[#0D94E4] lg:block" />
            <Image
              src="/speciality/cardiology/setup-person-hq.png"
              alt="Clinician onboarding setup"
              width={397}
              height={564}
              className="mx-auto h-auto w-[68%] lg:absolute lg:left-[106px] lg:top-[19px] lg:w-[397px]"
              sizes="(max-width: 1024px) 70vw, 397px"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 lg:px-[70px] lg:py-[75px]">
        <div className="grid gap-10 lg:grid-cols-[611px_632px] lg:items-start">
          <div className="relative min-h-[449px] rounded-2xl bg-[#F6FCFE] p-6 sm:p-8">
            <Image
              src="/speciality/cardiology/heart-illustration-hq.png"
              alt="Heart monitoring illustration"
              width={221}
              height={308}
              className="relative z-10 mx-auto h-auto w-[180px] pt-7 sm:w-[221px]"
              sizes="(max-width: 768px) 180px, 221px"
            />
            <div className="absolute left-0 top-0 h-[141px] w-[189px] rounded-lg bg-white p-3 shadow-sm">
              <div className="h-10 w-10 rounded-full border border-[#D9D9D9]" />
              <p className="mt-2 whitespace-pre-line text-[16px] leading-[1.2] text-[#464646]">Heart Rate{"\n"}120 bmp</p>
            </div>
            <div className="absolute bottom-0 right-0 h-[141px] w-[189px] rounded-lg bg-white p-3 shadow-sm">
              <div className="h-10 w-10 rounded-full border border-[#D9D9D9]" />
              <p className="mt-2 whitespace-pre-line text-[16px] leading-[1.2] text-[#464646]">Blood Count{"\n"}80-90</p>
            </div>
            <div className="absolute bottom-0 left-0 h-[141px] w-[189px] rounded-lg bg-white p-3 shadow-sm">
              <div className="h-10 w-10 rounded-full border border-[#D9D9D9]" />
              <p className="mt-2 whitespace-pre-line text-[16px] leading-[1.2] text-[#464646]">Blood Status{"\n"}116/70</p>
            </div>
          </div>

          <div>
            <h2 className="max-w-[632px] font-syne text-[32px] font-semibold leading-[1.2] sm:text-[38px]">
              Keeping Patients Safe with Live Data
            </h2>
            <p className="mt-5 max-w-[609px] text-[16px] leading-[1.45] text-[#464646]">
              In cardiology, a few pounds of fluid is the difference between a quick med change and a 911 call. Manual logs are reactive. You only hear about the problem when it's already a disaster.
            </p>

            <div className="mt-8 space-y-4">
              {liveDataPoints.map((item) => (
                <article key={item.title} className="flex items-start gap-5">
                  <div className="inline-flex h-[87px] w-[87px] shrink-0 items-center justify-center rounded-full bg-[#2847C5]">
                    <Image src={item.icon} alt="" width={47} height={47} className="h-auto w-auto max-w-[51px]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] leading-[1.4] text-[#10172A]">{item.title}</h3>
                    <p className="mt-2 max-w-[512px] text-[16px] leading-[1.45] text-[#464646]">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
