import TextImage from "@/components/TextImage";
import ProfileCard from "@/components/ProfileCard";

export default function About() {
  return (
    <>
      <ProfileCard
        title="Γνωρίστε τον κτηνίατρο σας"
        name="Dr. Καρκάνης Αθανάσιος"
        specialization="DVM, MSc, MRCVS"
        imageUrl="https://northovet-assets.s3.eu-west-1.amazonaws.com/thanasis.jpg"
        altText="The doctor"
      />
      <TextImage
        title="Εκπαίδευση"
        text={[
          "Tο 2011 αποφοίτησε από την Κτηνιατρική Σχολή Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης (Α.Π.Θ.) και αφού εκπλήρωσε τις στρατιωτικές του υποχρεώσεις επέστρεψε στην Χειρουργική Κλινική Ζώων Συντροφιάς Α.Π.Θ. όπου παρέμεινε για 3 χρόνια. Εκεί εκπαιδεύτηκε στην Χειρουργική και Ορθοπεδική Ζώων Συντροφιάς ενώ ταυτόχρονα εργαζόταν σε ιδιωτικές κλινικές ζώων συντροφιάς της Θεσσαλονίκης.",
          "Το 2022 απέκτησε τον μεταπτυχιακό τίτλο (MSc) της Ιατρικής Σχολής του Δημοκρίτειου Πανεπιστημίου Θράκης με θέμα “Κλινική Φαρμακολογία” με σκοπό να διευρύνει τις γνώσεις του στην σωστή και ορθολογική χρήση αντιβιοτικών φαρμάκων, η οποία έχει ως αποτέλεσμα την αυξανόμενη αντίσταση των μικροβίων σε αυτά, γεγονός που αποτελεί απειλή για τη δημόσια υγεία καθώς μπορεί να μετατρέψει μια απλή λοίμωξη σε κατάσταση απειλητική για την ζωή του ζώου αλλά και του ανθρώπου.",
          "Έχει παρακολουθήσει πληθώρα διεθνών σεμιναρίων και συνεδρίων. Είναι ενεργό μέλος Ευρωπαϊκών και Αμερικάνικων Οργανισμών Κτηνιατρικής Ορθοπεδικής έχοντας στο δυναμικό του ομιλίες και παρουσιάσεις σε συνέδρια, ακαδημαϊκά βραβεία και δημοσιεύσεις σε ελληνικά και αγγλόφωνα περιοδικά.",
        ]}
        images={[
          {
            url: "https://northovet-assets.s3.eu-west-1.amazonaws.com/graduation-high-school-university-concept-space-text-1.jpg",
            alt: "Graduation image",
          },
        ]}
        reverse={true}
      />
      <TextImage
        title="Μετεκπαίδευση και Εξειδίκευση Στο Εξωτερικό. Η.Π.Α. – Μ. Βρετανία - Σουηδία"
        text={[
          "Το ενδιαφέρον του για την Ορθοπεδική στα Ζώα Συντροφιάς τον ώθησε να αναπτύξει ακόμη περισσότερο τις γνώσεις και τις τεχνικές του στο εξωτερικό. Η μετεκπαίδευση ξεκίνησε στην Διαγνωστική – Απεικονιστική Ζώων Συντροφιάς της Πανεπιστημιακής Κτηνιατρικής Σχολής στην Ουψάλα της Σουηδίας.",
          "Ακολούθησε μετεκπαίδευση στο Πανεπιστημιακό Νοσοκομείο Ζώων Συντροφιάς στο Μιζούρι των Η.Π.Α. (Veterinary Medical Teaching  ospital,University of Missouri,U.S.A), στο τμήμα της Ορθοπεδικής, όπου εξειδικεύονται σε περιστατικά παραμόρφωσης των άκρων στα ζώα συντροφιάς και αποτελεί κέντρο αναφοράς. Υπό την καθοδήγηση των Dr. Derek B. Fox και Dr. James L. Tomlinson, οι οποίοι έθεσαν τα θεμέλια στην παγκόσμια βιβλιογραφία για την αντιμετώπιση περιστατικών με παραμόρφωση στο αντιβράχιο, στο μηριαίο κ.α.",
          "Βελτίωσε σε μεγάλο βαθμό την εμπειρία του σε τεχνικές αποκατάστασης σε μακρά οστά αλλά και στο γόνατο. Κατά τη διάρκεια της περιόδου αυτής, απέκτησε τον τίτλο του Μέλους του Βασιλικού Κολλεγίου Κτηνιάτρων της Μ. Βρετανίας (MRCVS).",
          "Το 2016 μετακόμισε στην Μεγάλη Βρετανία για την θέση του εκπαιδευόμενου Ορθοπεδικού Χειρουργού στην ιδιωτική κλινική Chestergates Veterinary Specialists υπό την καθοδήγηση του John Innes, Καθηγητή Ορθοπεδικής της Πανεπιστημιακής Κτηνιατρικής Σχολής του Λίβερπουλ και Προέδρου του Ορθοπεδικού Κτηνιατρικού Ευρωπαϊκού Συλλόγου (ESVOT).",
          "Το 2017 επισκέφθηκε το Ορλάντο των Η.Π.Α όπου και τελειοποίησε την τεχνική Tibial Plateau Levelling Osteotomy (TPLO) για την αποκατάστασης ρήξης πρόσθιου χιαστού συνδέσμου στο σκύλο μαζί με άλλες τεχνικές αποκατάστασης ορθοπεδικών παθήσεων.",
          "Από το 2018 επέστρεψε και δουλεύει στην Ελλάδα ενημερώνοντας συνέχεια τις τεχνικές του με Ευρωπαϊκές και Αμερικάνικες μετεκπαιδεύσεις πάνω στην Χειρουργική και Ορθοπεδική Ζώων Συντροφιάς.",
          "Η αποκλειστική χρήση σύγχρονων εξειδικευμένων υλικών οστεοσύνθεσης από τιτάνιο με την τεχνική Monoaxial ή Polyaxial Locking είναι πλέον επιτακτική ανάγκη για την θεραπεία ορθοπεδικών παθήσεων ώστε να παρέχουμε την μέγιστη αποκατάσταση σε όλους τους τετράποδους φίλους χωρίς καμία εξαίρεση.",
        ]}
        images={[
          {
            url: "https://northovet-assets.s3.eu-west-1.amazonaws.com/top-view-stethoscope-with-paper-bone-paw-print-animal-day.jpg",
            alt: "Top view stethoscope with paper bone paw print animal day",
          },
        ]}
        reverse={false}
      />
    </>
  );
}
