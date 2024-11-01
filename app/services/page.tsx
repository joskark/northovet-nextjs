import CardGrid from "@/components/CardGrid";

export default function Services() {
  const cards = [
    {
      title: "Ρήξη Πρόσθιου Χιαστού Συνδέσμου (TPLO, CCWO, LSS)",
      text: [
        "Η ρήξη πρόσθιου χιαστού συνδέσμου είναι ένας συνηθισμένος τραυματισμός που επηρεάζει τα ζώα συντροφιάς και κυρίως τους σκύλους. Είναι μία επώδυνη κατάσταση που προκαλεί χωλότητα στο ζώο. Υπάρχουν δυο χιαστοί σύνδεσμοι μέσα στο γόνατο: ο πρόσθιος και ο οπίσθιος. Ονομάζονται έτσι γιατί χιάζονται μεταξύ τους...",
      ],
      imageUrl: "/services/human-hand-holding-dog-paw.jpg",
      altText: "Human hand holding dog paw",
      readMoreLink: "/blog/riksi-prosthiou-hiastou-sindesmou",
    },
    {
      title: "Κατάγματα Άκρων - Ενδοαρθρικά κατάγματα",
      text: [
        "Τα κατάγματα άκρων αποτελούν συχνή πάθηση στα ζώα συντροφιάς. Αυτά μπορεί να προκληθούν από κάποια μορφή τραυματισμού όπως η πτώση από ύψος ή το τροχαίο. Η αντιμετώπιση πρέπει να είναι άμεση είτε αυτή είναι συντηρητική είτε  χειρουργική με σκοπό να αποκατασταθεί η φυσιολογική λειτουργία του άκρου...",
      ],
      imageUrl: "/services/veterinarian-checking-dog-paw.jpg",
      altText: "Veterinarian checking dog paw",
      readMoreLink: "/blog/katagmata-akrwn-endoathrika-katagmata",
    },
    {
      title: "Εξάρθρημα Επιγονατίδας",
      text: [
        "Το εξάρθρημα επιγονατίδας είναι μια συνηθισμένη ορθοπεδική πάθηση και συμβαίνει όταν η επιγονατίδα απομακρύνεται από την φυσιολογική της θέση. Στις περισσότερες περιπτώσεις, ένα ζώο θα βγάλει ξαφνικά μια κραυγή πόνου και θα σηκώσει το πόδι του από το έδαφος για σύντομο χρονικό διάστημα, ακολουθούμενο από επιστροφή στη σχετικά κανονική χρήση των άκρων καθώς η επιγονατίδα επιστρέφει στην κανονική της θέση. Αυτά τα επεισόδια ξαφνικής χωλότητας συχνά αυξάνονται σε συχνότητα με την πάροδο του χρόνου και η επιγονατίδα μπορεί να παραμείνει εξαρθρωμένη καθώς η κατάσταση τείνει να γίνει πιο προχωρημένη...",
      ],
      imageUrl: "/services/veterinarians-make-x-ray-sick-cat-table.jpg",
      altText: "Veterinarians make x-ray sick cat table",
      readMoreLink: "/blog/eksarthrima-epigonatidas",
    },
    {
      title: "Χονδροπάθειες – Οστεοχόνδρωση",
      text: [
        "Αναφέρονται σε διαταραχές στην ανάπτυξη και τη σύσταση του χόνδρου και του οστού.",
      ],
      imageUrl: "/services/close-up-doctor-checking-cat.jpg",
      altText: "Close up doctor checking cat",
    },
    {
      title: "Ρήξη Αχίλλειου Τένοντα - Τενοντοπάθειες",
      text: [
        "Είναι μια κατάσταση όπου ο τένοντας στην περιοχή του αχίλλειου τένοντα υποστηρίζει υπερβολικό άγχος και σπάει.",
        "Οι “Τενοντοπάθειες” αναφέρονται σε διαταραχές και βλάβες στους τένοντες.",
      ],
      imageUrl: "/services/close-up-hands-touching-dog.jpg",
      altText: "Close up hands touching dog",
    },
    {
      title: "Ρήξη Συνδέσμων",
      text: [
        "Είναι η απώλεια της συνοχής ενός συνδέσμου μεταξύ των οστών. Η ρήξη συνδέσμων αναφέρεται στη φυσική διάλυση ή τμηματοποίηση των συνδέσμων που συνδέουν τα οστά στις αρθρώσεις των ζώων.",
      ],
      imageUrl: "/services/doctor-paw-shake.jpg",
      altText: "Doctor paw shake",
    },
    {
      title: "Νόσος των Βραχυκεφαλικών (BOAS)",
      text: [
        "Είναι μια πάθηση που επηρεάζει την αναπνοή και τη γενική υγεία σε κυρίως κοντόμουτρα ράτσες σκύλων.",
      ],
      imageUrl: "/services/veterinarian-taking-care-dog-ear.jpg",
      altText: "Veterinarian taking care dog ear",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <CardGrid cards={cards} />
    </div>
  );
}
