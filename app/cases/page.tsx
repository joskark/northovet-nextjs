import TextImage from "@/components/TextImage";
import Video from "@/components/Video";

export default function Cases() {
  return (
    <>
      <TextImage
        title="Botzuk"
        text={[
          "Αυτός είναι ο Botzuk!!!",
          "Είναι ένας πολύ γλυκός γάτος 3 ετών οποίος είχε ένα τρομερό τροχαίο ατύχημα με αμάξι.",
          "Αυτό είχε ως αποτέλεσμα να πάθει κραιοεγκεφαλικές κακώσεις, Σύνδρομο Horner, κατάγματα γνάθου και πολλαπλά κατάγματα λεκάνης.",
          "Τα κατάγματα γνάθου δεν του επέτρεπαν να φάει και να πιεί και τα κατάγματα λεκάνης λόγω των αιχμηρών άκρων ήταν επικίνδυνα για τα ενδοκοιλιακά όργανα όπως η ουροδόχος κύστη, η ουρήθρα και το παχύ έντερο.",
          "Λόγω των κακώσεων στον εγκέφαλο ήταν επικίνδυνο να εισέλθει σε χειρουργική επέμβαση και έπρεπε να μείνει στην εντατική νοσηλεία.",
          "Αφού ξεπέρασε τον κίνδυνο , αποφασίστηκε αποκατάσταση των καταγμάτων της γνάθου και της λεκάνης.",
          "Μετά από ένα πολύωρο επιτυχημένο χειρουργείο, στην ανάνηψη παρουσίασε πρόβλημα στην αναπνοή και έπρεπε να γίνει επείγουσα τραχειοστομία και να μείνει στην εντατική θεραπεία σε καταστολή.",
          "Επειδή όμως είναι μεγάλος μαχητής μετά από 2 μέρες κατάφερε να βγει από την εντατική και την επόμενη μέρα να γυρίσει σπίτι του για να συνεχίσει την αποθεραπεία του από όλο αυτό το Γολγοθά που πέρασε!!!",
          "Ευχαριστούμε θερμά την ιδιοκτήτρια του που μας εμπιστεύθηκε και την προσπάθεια της στην δύσκολη και μακροχρόνια αποθεραπεία του Botzuk για να μπορεί σήμερα να τρέχει και να παίζει με τους φίλους του!!!",
        ]}
        images={[
          {
            url: "https://northovet-assets.s3.eu-west-1.amazonaws.com/cases/Botzuk-post-op-1-scaled.jpg",
            alt: "Male veterinarian examining cat ear infection with otoscope vet clinic",
          },
          {
            url: "https://northovet-assets.s3.eu-west-1.amazonaws.com/cases/Botzuk-pre-op-1.jpg",
            alt: "Male veterinarian examining cat ear infection with otoscope vet clinic",
          },
          // {
          //   url: "https://northovet-assets.s3.eu-west-1.amazonaws.com/cases/botzuk1-1-1.mp4",
          //   alt: "Male veterinarian examining cat ear infection with otoscope vet clinic",
          // },
        ]}
      />
      {/* <Video
        url="https://northovet-assets.s3.eu-west-1.amazonaws.com/cases/botzuk1-1-1.mp4"
        width="288"
        height="512"
      /> */}
    </>
    // <p>
    //   Στη σελίδα αυτή, μοιραζόμαστε μαζί σας στιγμιότυπα από δύσκολα
    //   περιστατικά που αντιμετωπίσαμε με εξαιρετική επιτυχία, χρησιμοποιώντας
    //   προηγμένες χειρουργικές πρακτικές και κορυφαίες τεχνικές. Ο Δρ. Καρκάνης
    //   έχει αφοσιωθεί στην παροχή συνεπούς και εξειδικευμένης φροντίδας για
    //   κάθε περίπτωση που αναλαμβάνει. Από επείγουσες χειρουργικές επεμβάσεις
    //   έως προηγμένες θεραπείες, ο κτηνίατρος μας λειτουργεί με υψηλή
    //   επιδεξιότητά σε κάθε πτυχή της κτηνιατρικής φροντίδας που παρέχει. Με
    //   εμπειρία ετών ο γιατρός έχει αντιμετωπίσει ποικίλες περιπτώσεις με
    //   επιτυχία, αναπτύσσοντας προσαρμοσμένες λύσεις για κάθε ζώο συντροφιάς.
    //   Από την αρχική αξιολόγηση έως την μετεγχειρητική περίοδο, ο κτηνίατρος
    //   μας προσφέρει μια ολοκληρωμένη προσέγγιση στην υγεία και την ευημερία
    //   των κατοικιδίων.
    // </p>
  );
}