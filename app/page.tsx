import Hero from "@/components/Hero";
import TextImage from "@/components/TextImage";

export default function Home() {
  return (
    <>
      <Hero />
      <TextImage
        title="Καλωσήρθατε"
        text={[
          "Καλωσορίσατε στον κόσμο της εξειδικευμένης φροντίδας για τα κατοικίδιά σας! Ο στόχος μας είναι να παρέχουμε υψηλότατου επιπέδου κτηνιατρικές υπηρεσίες με άμεσα αποτελέσματα που μιλούν από μόνα τους.",
          "Εδώ, η αγάπη για τα ζώα ενώνεται με την τεχνογνωσία, δημιουργώντας μια κοινότητα που έχει στην καρδιά της την ευημερία των τετράποδων φίλων μας.",
          "Με μεγάλη εμπειρία σε Ελλάδα και εξωτερικό, με εξειδίκευση σε προηγμένες τεχνικές, ο γιατρός παρέχει υπηρεσίες υψηλής ποιότητας, βάζοντας την υγεία του κατοικίδιου σας σε πρώτη και απόλυτη προτεραιότητα.",
          "Εδώ μπορείτε να μας εμπιστευτείτε!",
        ]}
        images={[
          {
            url: "https://northovet-assets.s3.eu-west-1.amazonaws.com/male-veterinarian-examining-cat-ear-infection-with-otoscope-vet-clinic-1.jpg",
            alt: "Male veterinarian examining cat ear infection with otoscope vet clinic",
          },
        ]}
      />
      <TextImage
        title="Υγιή & Χαρούμενα κατοικίδια με τη φροντίδα μας"
        text={[
          "Στόχος μας είναι η φροντίδα που προσφέρουμε να υπερβαίνει τις προσδοκίες. Μάθετε περισσότερα για την ποιότητα της εξειδικευμένης μας φροντίδας αλλά και πληροφορίες διαφόρων παθήσεων που χρήζουν χειρουργικής επέμβαση για την  ευζωία των φίλων μας.",
        ]}
        images={[
          {
            url: "https://northovet-assets.s3.eu-west-1.amazonaws.com/top-view-stethoscope-with-paper-bone-paw-print-animal-day.jpg",
            alt: "Top view stethoscope with paper bone paw print animal day",
          },
        ]}
        reverse={true}
      />
    </>
  );
}
