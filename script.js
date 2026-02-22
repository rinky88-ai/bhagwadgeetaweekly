const baseShlokas = [
  {
    reference: "Bhagavad Gita 2.13",
    sanskrit: "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा । तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति ॥",
    transliterationEnglish: "dehino 'smin yatha dehe kaumaram yauvanam jara | tatha dehantara-praptir dhiras tatra na muhyati ||",
    meaning14: "The self continues through life stages and beyond the body, so wise people are not confused by change."
  },
  {
    reference: "Bhagavad Gita 2.14",
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः । आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ॥",
    transliterationEnglish: "matra-sparsas tu kaunteya sitosna-sukha-duhkha-dah | agamapayino 'nityas tams titikshasva bharata ||",
    meaning14: "Pleasure and pain are temporary; patience and endurance build inner strength."
  },
  {
    reference: "Bhagavad Gita 2.20",
    sanskrit: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः । अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ॥",
    transliterationEnglish: "na jayate mriyate va kadacinnayam bhutva bhavita va na bhuyah | ajo nityah sasvato 'yam purano na hanyate hanyamane sarire ||",
    meaning14: "The true self is unborn and undying; death affects the body, not the eternal soul."
  },
  {
    reference: "Bhagavad Gita 2.47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
    transliterationEnglish: "karmany evadhikaras te ma phalesu kadacana | ma karma-phala-hetur bhur ma te sango 'stv akarmani ||",
    meaning14: "You control your effort, not outcomes, so act sincerely without attachment to results."
  },
  {
    reference: "Bhagavad Gita 2.48",
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय । सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते ॥",
    transliterationEnglish: "yogasthah kuru karmani sangam tyaktva dhananjaya | siddhy-asiddhyoh samo bhutva samatvam yoga ucyate ||",
    meaning14: "Yoga means balance in success and failure while doing your duty."
  },
  {
    reference: "Bhagavad Gita 2.50",
    sanskrit: "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते । तस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम् ॥",
    transliterationEnglish: "buddhi-yukto jahatiha ubhe sukrita-dushkrite | tasmad yogaya yujyasva yogah karmasu kausalam ||",
    meaning14: "A steady mind brings skill in action; yoga is excellence with awareness."
  },
  {
    reference: "Bhagavad Gita 2.70",
    sanskrit: "आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत् । तद्वत्कामा यं प्रविशन्ति सर्वे स शान्तिमाप्नोति न कामकामी ॥",
    transliterationEnglish: "apuryamanam acala-pratistham samudram apah pravisanti yadvat | tadvat kama yam pravisanti sarve sa santim apnoti na kama-kami ||",
    meaning14: "Peace comes when desires do not shake your inner stability."
  },
  {
    reference: "Bhagavad Gita 3.7",
    sanskrit: "यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन । कर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते ॥",
    transliterationEnglish: "yas tv indriyani manasa niyamy arabhate 'rjuna | karmendriyaih karma-yogam asaktah sa visisyate ||",
    meaning14: "Self-control and detached action are superior to passive avoidance."
  },
  {
    reference: "Bhagavad Gita 3.19",
    sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर । असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः ॥",
    transliterationEnglish: "tasmad asaktah satatam karyam karma samacara | asakto hy acaran karma param apnoti purusah ||",
    meaning14: "Consistent duty without attachment leads to spiritual growth."
  },
  {
    reference: "Bhagavad Gita 3.21",
    sanskrit: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः । स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ॥",
    transliterationEnglish: "yad yad acarati sresthas tat tad evetaro janah | sa yat pramanam kurute lokas tad anuvartate ||",
    meaning14: "People follow the example of leaders, so live responsibly."
  },
  {
    reference: "Bhagavad Gita 3.30",
    sanskrit: "मयि सर्वाणि कर्माणि संन्यस्याध्यात्मचेतसा । निराशीर्निर्ममो भूत्वा युध्यस्व विगतज्वरः ॥",
    transliterationEnglish: "mayi sarvani karmani sannyasyadhyatma-cetasa | nirasir nirmamo bhutva yudhyasva vigata-jvarah ||",
    meaning14: "Offer your actions to the Divine and act without anxiety or ego."
  },
  {
    reference: "Bhagavad Gita 3.35",
    sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् । स्वधर्मे निधनं श्रेयः परधर्मो भयावहः ॥",
    transliterationEnglish: "sreyan sva-dharmo vigunah para-dharmat sv-anusthitat | sva-dharme nidhanam sreyah para-dharmo bhayavahah ||",
    meaning14: "It is better to follow your own duty imperfectly than copy someone else’s path."
  },
  {
    reference: "Bhagavad Gita 4.7",
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत । अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥",
    transliterationEnglish: "yada yada hi dharmasya glanir bhavati bharata | abhyutthanam adharmasya tadatmanam srjamy aham ||",
    meaning14: "When righteousness declines, the Divine manifests to restore balance."
  },
  {
    reference: "Bhagavad Gita 4.8",
    sanskrit: "परित्राणाय साधूनां विनाशाय च दुष्कृताम् । धर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥",
    transliterationEnglish: "paritranaya sadhunam vinasaya ca duskrtam | dharma-samsthapanarthaya sambhavami yuge yuge ||",
    meaning14: "Divine intervention protects the good and re-establishes dharma."
  },
  {
    reference: "Bhagavad Gita 4.13",
    sanskrit: "चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः । तस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम् ॥",
    transliterationEnglish: "catur-varnyam maya srstam guna-karma-vibhagasah | tasya kartaram api mam viddhy akartaram avyayam ||",
    meaning14: "Social roles are linked to qualities and action; the Divine remains beyond limitation."
  },
  {
    reference: "Bhagavad Gita 4.34",
    sanskrit: "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया । उपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः ॥",
    transliterationEnglish: "tad viddhi pranipatena pariprasnena sevaya | upadeksyanti te jnanam jnaninas tattva-darsinah ||",
    meaning14: "Seek truth with humility, inquiry, and service to the wise."
  },
  {
    reference: "Bhagavad Gita 4.38",
    sanskrit: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते । तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति ॥",
    transliterationEnglish: "na hi jnanena sadrsam pavitram iha vidyate | tat svayam yoga-samsiddhah kalenatmani vindati ||",
    meaning14: "Nothing purifies like true knowledge, realized through disciplined practice."
  },
  {
    reference: "Bhagavad Gita 4.39",
    sanskrit: "श्रद्धावान् लभते ज्ञानं तत्परः संयतेन्द्रियः । ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति ॥",
    transliterationEnglish: "sraddhavan labhate jnanam tat-parah samyatendriyah | jnanam labdhva param santim acirenadhigacchati ||",
    meaning14: "Faith, dedication, and self-control lead to wisdom and peace."
  },
  {
    reference: "Bhagavad Gita 5.8",
    sanskrit: "नैव किञ्चित्करोमीति युक्तो मन्येत तत्त्ववित् । पश्यञ्शृण्वन्स्पृशञ्जिघ्रन्नश्नन्गच्छन्स्वपंश्वसन् ॥",
    transliterationEnglish: "naiva kincit karomiti yukto manyeta tattva-vit | pasyan srnvan sprsan jighrann asnan gacchan svapan svasan ||",
    meaning14: "The realized person acts without ego-identification as the doer."
  },
  {
    reference: "Bhagavad Gita 5.10",
    sanskrit: "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः । लिप्यते न स पापेन पद्मपत्रमिवाम्भसा ॥",
    transliterationEnglish: "brahmany adhaya karmani sangam tyaktva karoti yah | lipyate na sa papena padma-patram ivambhasa ||",
    meaning14: "Detached action offered to the Divine leaves one inwardly untouched."
  },
  {
    reference: "Bhagavad Gita 5.18",
    sanskrit: "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि । शुनि चैव श्वपाके च पण्डिताः समदर्शिनः ॥",
    transliterationEnglish: "vidya-vinaya-sampanne brahmane gavi hastini | suni caiva svapake ca panditah sama-darsinah ||",
    meaning14: "True wisdom sees the same divine essence in all beings."
  },
  {
    reference: "Bhagavad Gita 6.5",
    sanskrit: "उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत् । आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥",
    transliterationEnglish: "uddhared atmanatmanam natmanam avasadayet | atmaiva hy atmano bandhur atmaiva ripur atmanah ||",
    meaning14: "Your own mind can be your greatest friend or enemy."
  },
  {
    reference: "Bhagavad Gita 6.6",
    sanskrit: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः । अनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत् ॥",
    transliterationEnglish: "bandhur atmatmanas tasya yenatmaivatmana jitah | anatmanas tu satrutve vartetatmaiva satru-vat ||",
    meaning14: "Self-mastery creates inner friendship; lack of discipline creates inner conflict."
  },
  {
    reference: "Bhagavad Gita 6.26",
    sanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम् । ततस्ततो नियम्यैतदात्मन्येव वशं नयेत् ॥",
    transliterationEnglish: "yato yato nishcarati manas cancalam asthiram | tatas tato niyamyaitad atmany eva vasam nayet ||",
    meaning14: "Whenever the mind wanders, gently bring it back to centered awareness."
  },
  {
    reference: "Bhagavad Gita 6.35",
    sanskrit: "असंशयं महाबाहो मनो दुर्निग्रहं चलम् । अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ॥",
    transliterationEnglish: "asamsayam maha-baho mano durnigraham calam | abhyasena tu kaunteya vairagyena ca grhyate ||",
    meaning14: "The restless mind is controlled through practice and detachment."
  },
  {
    reference: "Bhagavad Gita 6.47",
    sanskrit: "योगिनामपि सर्वेषां मद्गतेनान्तरात्मना । श्रद्धावान्भजते यो मां स मे युक्ततमो मतः ॥",
    transliterationEnglish: "yoginam api sarvesam mad-gatenantar-atmana | sraddhavan bhajate yo mam sa me yuktatamo matah ||",
    meaning14: "Among yogis, the one devoted inwardly with faith is most united."
  },
  {
    reference: "Bhagavad Gita 7.7",
    sanskrit: "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय । मयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव ॥",
    transliterationEnglish: "mattah parataram nanyat kincid asti dhananjaya | mayi sarvam idam protam sutre mani-gana iva ||",
    meaning14: "All existence is strung in the Divine like pearls on a thread."
  },
  {
    reference: "Bhagavad Gita 7.14",
    sanskrit: "दैवी ह्येषा गुणमयी मम माया दुरत्यया । मामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते ॥",
    transliterationEnglish: "daivi hy esa guna-mayi mama maya duratyaya | mam eva ye prapadyante mayam etam taranti te ||",
    meaning14: "Divine surrender helps transcend the binding forces of illusion."
  },
  {
    reference: "Bhagavad Gita 7.16",
    sanskrit: "चतुर्विधा भजन्ते मां जनाः सुकृतिनोऽर्जुन । आर्तो जिज्ञासुरर्थार्थी ज्ञानी च भरतर्षभ ॥",
    transliterationEnglish: "catur-vidha bhajante mam janah sukrtino 'rjuna | arto jijnasur artharthi jnani ca bharatarsabha ||",
    meaning14: "People approach the Divine for different reasons, and each step can begin growth."
  },
  {
    reference: "Bhagavad Gita 7.19",
    sanskrit: "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते । वासुदेवः सर्वमिति स महात्मा सुदुर्लभः ॥",
    transliterationEnglish: "bahunam janmanam ante jnanavan mam prapadyate | vasudevah sarvam iti sa mahatma sudurlabhah ||",
    meaning14: "Great wisdom culminates in seeing the Divine everywhere."
  },
  {
    reference: "Bhagavad Gita 8.7",
    sanskrit: "तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च । मय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयः ॥",
    transliterationEnglish: "tasmat sarvesu kalesu mam anusmara yudhya ca | mayy arpita-mano-buddhir mam evaisyasy asamsayah ||",
    meaning14: "Remember the Divine while fulfilling life’s responsibilities."
  },
  {
    reference: "Bhagavad Gita 9.22",
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते । तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥",
    transliterationEnglish: "ananyas cintayanto mam ye janah paryupasate | tesam nityabhiyuktanam yoga-ksemam vahamy aham ||",
    meaning14: "Steady devotion invites divine care and protection."
  },
  {
    reference: "Bhagavad Gita 9.26",
    sanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति । तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ॥",
    transliterationEnglish: "patram puspam phalam toyam yo me bhaktya prayacchati | tad aham bhakty-upahrtam asnami prayatatmanah ||",
    meaning14: "The Divine accepts even simple offerings made with genuine devotion."
  },
  {
    reference: "Bhagavad Gita 9.27",
    sanskrit: "यत्करोषि यदश्नासि यज्जुहोषि ददासि यत् । यत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम् ॥",
    transliterationEnglish: "yat karosi yad asnasi yaj juhosi dadasi yat | yat tapasyasi kaunteya tat kurusva mad-arpanam ||",
    meaning14: "Offer all actions, choices, and discipline to a higher purpose."
  },
  {
    reference: "Bhagavad Gita 9.29",
    sanskrit: "समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः । ये भजन्ति तु मां भक्त्या मयि ते तेषु चाप्यहम् ॥",
    transliterationEnglish: "samo 'ham sarva-bhutesu na me dvesyo 'sti na priyah | ye bhajanti tu mam bhaktya mayi te tesu capy aham ||",
    meaning14: "The Divine is equal to all, yet devotion creates conscious closeness."
  },
  {
    reference: "Bhagavad Gita 10.8",
    sanskrit: "अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते । इति मत्वा भजन्ते मां बुधा भावसमन्विताः ॥",
    transliterationEnglish: "aham sarvasya prabhavo mattah sarvam pravartate | iti matva bhajante mam budha bhava-samanvitah ||",
    meaning14: "Knowing the Divine as the source of all inspires loving devotion."
  },
  {
    reference: "Bhagavad Gita 10.10",
    sanskrit: "तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम् । ददामि बुद्धियोगं तं येन मामुपयान्ति ते ॥",
    transliterationEnglish: "tesam satata-yuktanam bhajatam priti-purvakam | dadami buddhi-yogam tam yena mam upayanti te ||",
    meaning14: "To devoted seekers, the Divine grants guidance toward realization."
  },
  {
    reference: "Bhagavad Gita 10.20",
    sanskrit: "अहमात्मा गुडाकेश सर्वभूताशयस्थितः । अहमादिश्च मध्यं च भूतानामन्त एव च ॥",
    transliterationEnglish: "aham atma gudakesa sarva-bhutasaya-sthitah | aham adis ca madhyam ca bhutanam anta eva ca ||",
    meaning14: "The Divine Self dwells in all beings from beginning to end."
  },
  {
    reference: "Bhagavad Gita 10.41",
    sanskrit: "यद् यद् विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा । तत्तदेवावगच्छ त्वं मम तेजोंऽशसम्भवम् ॥",
    transliterationEnglish: "yad yad vibhutimat sattvam srimad urjitam eva va | tat tad evavagaccha tvam mama tejo-'msa-sambhavam ||",
    meaning14: "All excellence and brilliance in the world reflects divine radiance."
  },
  {
    reference: "Bhagavad Gita 11.55",
    sanskrit: "मत्कर्मकृन्मत्परमो मद्भक्तः सङ्गवर्जितः । निर्वैरः सर्वभूतेषु यः स मामेति पाण्डव ॥",
    transliterationEnglish: "mat-karma-krn mat-paramo mad-bhaktah sanga-varjitah | nirvairah sarva-bhutesu yah sa mam eti pandava ||",
    meaning14: "Selfless action, devotion, and non-hatred lead one to the Divine."
  },
  {
    reference: "Bhagavad Gita 12.13",
    sanskrit: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च । निर्ममो निरहङ्कारः समदुःखसुखः क्षमी ॥",
    transliterationEnglish: "adveshta sarva-bhutanam maitrah karuna eva ca | nirmamo nirahankarah sama-duhkha-sukhah ksami ||",
    meaning14: "A true devotee is kind, humble, and balanced in joy and sorrow."
  },
  {
    reference: "Bhagavad Gita 12.15",
    sanskrit: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः । हर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः ॥",
    transliterationEnglish: "yasman nodvijate loko lokan nodvijate ca yah | harsamarsa-bhayodvegair mukto yah sa ca me priyah ||",
    meaning14: "One who neither disturbs nor is disturbed is deeply dear to the Divine."
  },
  {
    reference: "Bhagavad Gita 12.20",
    sanskrit: "ये तु धर्म्यामृतमिदं यथोक्तं पर्युपासते । श्रद्धधाना मत्परमा भक्तास्तेऽतीव मे प्रियाः ॥",
    transliterationEnglish: "ye tu dharmyamrtam idam yathoktam paryupasate | sraddadhana mat-parama bhaktas te 'tiva me priyah ||",
    meaning14: "Those who live these teachings with faith and devotion are especially dear."
  },
  {
    reference: "Bhagavad Gita 13.22",
    sanskrit: "पुरुषः प्रकृतिस्थो हि भुङ्क्ते प्रकृतिजान्गुणान् । कारणं गुणसङ्गोऽस्य सदसद्योनिजन्मसु ॥",
    transliterationEnglish: "purusah prakrti-stho hi bhunkte prakrti-jan gunan | karanam guna-sango 'sya sad-asad-yoni-janmasu ||",
    meaning14: "Attachment to nature’s qualities binds the soul to repeated experience."
  },
  {
    reference: "Bhagavad Gita 14.26",
    sanskrit: "मां च योऽव्यभिचारेण भक्तियोगेन सेवते । स गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते ॥",
    transliterationEnglish: "mam ca yo 'vyabhicarena bhakti-yogena sevate | sa gunan samatityaitan brahma-bhuyaya kalpate ||",
    meaning14: "Steady devotion helps transcend limiting qualities and realize higher consciousness."
  },
  {
    reference: "Bhagavad Gita 15.7",
    sanskrit: "ममैवांशो जीवलोके जीवभूतः सनातनः । मनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति ॥",
    transliterationEnglish: "mamaivamso jiva-loke jiva-bhutah sanatanah | manah-sasthanindriyani prakrti-sthani karsati ||",
    meaning14: "Each being carries an eternal divine spark yet struggles through mind and senses."
  },
  {
    reference: "Bhagavad Gita 15.15",
    sanskrit: "सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च । वेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम् ॥",
    transliterationEnglish: "sarvasya caham hrdi sannivisto mattah smrtir jnanam apohanam ca | vedais ca sarvair aham eva vedyo vedanta-krd veda-vid eva caham ||",
    meaning14: "The Divine dwells in every heart and is the source of memory, knowledge, and understanding."
  },
  {
    reference: "Bhagavad Gita 16.21",
    sanskrit: "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः । कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत् ॥",
    transliterationEnglish: "tri-vidham narakasyedam dvaram nasanam atmanah | kamah krodhas tatha lobhas tasmad etat trayam tyajet ||",
    meaning14: "Desire, anger, and greed destroy inner life and must be restrained."
  },
  {
    reference: "Bhagavad Gita 17.3",
    sanskrit: "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत । श्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः ॥",
    transliterationEnglish: "sattvanurupa sarvasya sraddha bhavati bharata | sraddha-mayo 'yam puruso yo yac chraddhah sa eva sah ||",
    meaning14: "A person becomes shaped by the quality of their faith."
  },
  {
    reference: "Bhagavad Gita 18.61",
    sanskrit: "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति । भ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया ॥",
    transliterationEnglish: "isvarah sarva-bhutanam hrddese 'rjuna tisthati | bhramayan sarva-bhutani yantrarudhani mayaya ||",
    meaning14: "The Divine indwells all beings and governs cosmic movement."
  },
  {
    reference: "Bhagavad Gita 18.65",
    sanskrit: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु । मामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे ॥",
    transliterationEnglish: "man-mana bhava mad-bhakto mad-yaji mam namaskuru | mam evaisyasi satyam te pratijane priyo 'si me ||",
    meaning14: "Fix your mind in devotion and you will reach the Divine."
  },
  {
    reference: "Bhagavad Gita 18.66",
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज । अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥",
    transliterationEnglish: "sarva-dharman parityajya mam ekam saranam vraja | aham tvam sarva-papebhyo moksayisyami ma sucah ||",
    meaning14: "Complete surrender to the Divine frees one from fear and bondage."
  }
];

const YEAR_CYCLE_WEEKS = 52;

function buildMeanings(core) {
  return {
    "5-7": `Simple lesson: ${core}`,
    "8-10": `Practice this: ${core}`,
    "10-14": `Think deeply: ${core}`,
    "14+": core
  };
}

const DEVANAGARI_TO_BENGALI = {
  "।": "।",
  "॥": "॥",
  "०": "০",
  "१": "১",
  "२": "২",
  "३": "৩",
  "४": "৪",
  "५": "৫",
  "६": "৬",
  "७": "৭",
  "८": "৮",
  "९": "৯",
  "ँ": "ঁ",
  "ं": "ং",
  "ः": "ঃ",
  "ऄ": "঄",
  "अ": "অ",
  "आ": "আ",
  "इ": "ই",
  "ई": "ঈ",
  "उ": "উ",
  "ऊ": "ঊ",
  "ऋ": "ঋ",
  "ऌ": "ঌ",
  "ऍ": "঍",
  "ऎ": "঎",
  "ए": "এ",
  "ऐ": "ঐ",
  "ऑ": "঑",
  "ऒ": "঒",
  "ओ": "ও",
  "औ": "ঔ",
  "क": "ক",
  "ख": "খ",
  "ग": "গ",
  "घ": "ঘ",
  "ङ": "ঙ",
  "च": "চ",
  "छ": "ছ",
  "ज": "জ",
  "झ": "ঝ",
  "ञ": "ঞ",
  "ट": "ট",
  "ठ": "ঠ",
  "ड": "ড",
  "ढ": "ঢ",
  "ण": "ণ",
  "त": "ত",
  "थ": "থ",
  "द": "দ",
  "ध": "ধ",
  "न": "ন",
  "प": "প",
  "फ": "ফ",
  "ब": "ব",
  "भ": "ভ",
  "म": "ম",
  "य": "য",
  "र": "র",
  "ल": "ল",
  "व": "ব",
  "श": "শ",
  "ष": "ষ",
  "स": "স",
  "ह": "হ",
  "ऺ": "঺",
  "ऻ": "঻",
  "़": "়",
  "ऽ": "ঽ",
  "ा": "া",
  "ि": "ি",
  "ी": "ী",
  "ु": "ু",
  "ू": "ূ",
  "ृ": "ৃ",
  "ॄ": "ৄ",
  "ॅ": "৅",
  "े": "ে",
  "ै": "ৈ",
  "ॉ": "৉",
  "ो": "ো",
  "ौ": "ৌ",
  "्": "্",
  "ॐ": "৐"
};

const DEVANAGARI_TO_ODIA = {
  "।": "।",
  "॥": "॥",
  "०": "୦",
  "१": "୧",
  "२": "୨",
  "३": "୩",
  "४": "୪",
  "५": "୫",
  "६": "୬",
  "७": "୭",
  "८": "୮",
  "९": "୯",
  "ँ": "ଁ",
  "ं": "ଂ",
  "ः": "ଃ",
  "ऄ": "଄",
  "अ": "ଅ",
  "आ": "ଆ",
  "इ": "ଇ",
  "ई": "ଈ",
  "उ": "ଉ",
  "ऊ": "ଊ",
  "ऋ": "ଋ",
  "ऌ": "ଌ",
  "ऍ": "଍",
  "ऎ": "଎",
  "ए": "ଏ",
  "ऐ": "ଐ",
  "ऑ": "଑",
  "ऒ": "଒",
  "ओ": "ଓ",
  "औ": "ଔ",
  "क": "କ",
  "ख": "ଖ",
  "ग": "ଗ",
  "घ": "ଘ",
  "ङ": "ଙ",
  "च": "ଚ",
  "छ": "ଛ",
  "ज": "ଜ",
  "झ": "ଝ",
  "ञ": "ଞ",
  "ट": "ଟ",
  "ठ": "ଠ",
  "ड": "ଡ",
  "ढ": "ଢ",
  "ण": "ଣ",
  "त": "ତ",
  "थ": "ଥ",
  "द": "ଦ",
  "ध": "ଧ",
  "न": "ନ",
  "प": "ପ",
  "फ": "ଫ",
  "ब": "ବ",
  "भ": "ଭ",
  "म": "ମ",
  "य": "ଯ",
  "र": "ର",
  "ल": "ଲ",
  "व": "ଵ",
  "श": "ଶ",
  "ष": "ଷ",
  "स": "ସ",
  "ह": "ହ",
  "ऺ": "଺",
  "ऻ": "଻",
  "़": "଼",
  "ऽ": "ଽ",
  "ा": "ା",
  "ि": "ି",
  "ी": "ୀ",
  "ु": "ୁ",
  "ू": "ୂ",
  "ृ": "ୃ",
  "ॄ": "ୄ",
  "ॅ": "୅",
  "े": "େ",
  "ै": "ୈ",
  "ॉ": "୉",
  "ो": "ୋ",
  "ौ": "ୌ",
  "्": "୍",
  "ॐ": "୐"
};

const DEVANAGARI_TO_GUJARATI = {
  "।": "।",
  "॥": "॥",
  "०": "૦",
  "१": "૧",
  "२": "૨",
  "३": "૩",
  "४": "૪",
  "५": "૫",
  "६": "૬",
  "७": "૭",
  "८": "૮",
  "९": "૯",
  "ँ": "ઁ",
  "ं": "ં",
  "ः": "ઃ",
  "ऄ": "઄",
  "अ": "અ",
  "आ": "આ",
  "इ": "ઇ",
  "ई": "ઈ",
  "उ": "ઉ",
  "ऊ": "ઊ",
  "ऋ": "ઋ",
  "ऌ": "ઌ",
  "ऍ": "ઍ",
  "ऎ": "઎",
  "ए": "એ",
  "ऐ": "ઐ",
  "ऑ": "ઑ",
  "ऒ": "઒",
  "ओ": "ઓ",
  "औ": "ઔ",
  "क": "ક",
  "ख": "ખ",
  "ग": "ગ",
  "घ": "ઘ",
  "ङ": "ઙ",
  "च": "ચ",
  "छ": "છ",
  "ज": "જ",
  "झ": "ઝ",
  "ञ": "ઞ",
  "ट": "ટ",
  "ठ": "ઠ",
  "ड": "ડ",
  "ढ": "ઢ",
  "ण": "ણ",
  "त": "ત",
  "थ": "થ",
  "द": "દ",
  "ध": "ધ",
  "न": "ન",
  "प": "પ",
  "फ": "ફ",
  "ब": "બ",
  "भ": "ભ",
  "म": "મ",
  "य": "ય",
  "र": "ર",
  "ल": "લ",
  "व": "વ",
  "श": "શ",
  "ष": "ષ",
  "स": "સ",
  "ह": "હ",
  "ऺ": "઺",
  "ऻ": "઻",
  "़": "઼",
  "ऽ": "ઽ",
  "ा": "ા",
  "ि": "િ",
  "ी": "ી",
  "ु": "ુ",
  "ू": "ૂ",
  "ृ": "ૃ",
  "ॄ": "ૄ",
  "ॅ": "ૅ",
  "े": "ે",
  "ै": "ૈ",
  "ॉ": "ૉ",
  "ो": "ો",
  "ौ": "ૌ",
  "्": "્",
  "ॐ": "ૐ"
};

function convertDevanagariScript(text, map) {
  return Array.from(text)
    .map((char) => map[char] || char)
    .join("");
}

const shlokas = baseShlokas.map((item) => ({
  reference: item.reference,
  sanskrit: item.sanskrit,
  transliteration: {
    english: item.transliterationEnglish,
    hindi: item.sanskrit,
    tamil: item.transliterationEnglish,
    bengali: convertDevanagariScript(item.sanskrit, DEVANAGARI_TO_BENGALI),
    oriya: convertDevanagariScript(item.sanskrit, DEVANAGARI_TO_ODIA),
    gujarati: convertDevanagariScript(item.sanskrit, DEVANAGARI_TO_GUJARATI)
  },
  meanings: buildMeanings(item.meaning14)
}));

if (shlokas.length !== YEAR_CYCLE_WEEKS) {
  throw new Error(`Expected ${YEAR_CYCLE_WEEKS} unique shlokas, found ${shlokas.length}.`);
}

const wisdomByLanguage = {
  english: "Wisdom grows when action, compassion, and self-control come together in daily life.",
  hindi: "जब कर्म, करुणा और आत्मसंयम साथ चलते हैं, तब सच्चा ज्ञान जीवन में प्रकट होता है।",
  tamil: "செயல், கருணை, சுய கட்டுப்பாடு ஒன்றாகும் போது தான் உண்மையான ஞானம் வாழ்க்கையில் மலர்கிறது.",
  bengali: "যখন কর্ম, করুণা ও আত্মসংযম একসাথে চলে, তখনই জীবনে প্রকৃত জ্ঞান প্রস্ফুটিত হয়।",
  oriya: "କର୍ମ, କରୁଣା ଓ ଆତ୍ମସଂୟମ ଏକସାଥିରେ ଚାଲିଲେ ଜୀବନରେ ସତ୍ୟ ଜ୍ଞାନ ଫୁଟିଉଠେ।",
  gujarati: "જ્યારે કર્મ, કરુણા અને આત્મસંયમ સાથે ચાલે છે ત્યારે જીવનમાં સાચું જ્ઞાન પ્રગટે છે."
};

const translitSelect = document.getElementById("translitLang");
const ageGroupSelect = document.getElementById("ageGroup");
const sanskritEl = document.getElementById("sanskrit");
const translitEl = document.getElementById("transliteration");
const meaningEl = document.getElementById("meaning");
const refEl = document.getElementById("ref");
const wisdomEl = document.getElementById("wisdom");
const aiStatusEl = document.getElementById("aiStatus");
const speechStatusEl = document.getElementById("speechStatus");
const speakSanskritBtn = document.getElementById("speakSanskritBtn");
const prevWeekBtn = document.getElementById("prevWeekBtn");
const weekInfoEl = document.getElementById("weekInfo");

const nameInput = document.getElementById("name");
const thoughtInput = document.getElementById("thought");
const practiceInput = document.getElementById("practice");
const postBtn = document.getElementById("postBtn");
const commentsEl = document.getElementById("comments");
const statusEl = document.getElementById("status");

let weekOffset = 0;
let renderRequestId = 0;
const AI_CACHE_PREFIX = "gita-ai-v1";
let activeUtterance = null;
let sanskritVoice = null;
const sanskritAudio = new Audio();
let sanskritAudioUrl = null;

function getWeekIndex() {
  const epoch = new Date("2024-01-01T00:00:00Z");
  const now = new Date();
  const msInWeek = 7 * 24 * 60 * 60 * 1000;
  return Math.floor((now - epoch) / msInWeek);
}

function getDisplayedAbsoluteWeekIndex() {
  return getWeekIndex() - weekOffset;
}

function getDisplayedCycleSlot() {
  const absolute = getDisplayedAbsoluteWeekIndex();
  return ((absolute % YEAR_CYCLE_WEEKS) + YEAR_CYCLE_WEEKS) % YEAR_CYCLE_WEEKS;
}

function getCurrentShloka() {
  return shlokas[getDisplayedCycleSlot()];
}

function getFallbackTransliteration(shloka, lang) {
  return shloka.transliteration[lang] || shloka.transliteration.english;
}

function getFallbackContent(shloka, lang, ageGroup) {
  return {
    transliteration: getFallbackTransliteration(shloka, lang),
    explanation: shloka.meanings[ageGroup],
    wisdomMessage: wisdomByLanguage[lang] || wisdomByLanguage.english
  };
}

function getAICacheKey(shloka, lang, ageGroup) {
  return `${AI_CACHE_PREFIX}-${shloka.reference}-${lang}-${ageGroup}`;
}

function readAICache(shloka, lang, ageGroup) {
  try {
    const raw = localStorage.getItem(getAICacheKey(shloka, lang, ageGroup));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeAICache(shloka, lang, ageGroup, payload) {
  localStorage.setItem(getAICacheKey(shloka, lang, ageGroup), JSON.stringify(payload));
}

async function fetchAIContent(shloka, lang, ageGroup) {
  const response = await fetch("/api/gita-insight", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      reference: shloka.reference,
      sanskrit: shloka.sanskrit,
      transliterationLanguage: lang,
      ageGroup
    })
  });

  if (!response.ok) {
    throw new Error(`AI request failed: ${response.status}`);
  }

  const data = await response.json();
  if (!data || !data.transliteration || !data.explanation || !data.wisdomMessage) {
    throw new Error("AI response format invalid.");
  }

  return data;
}

function renderWeekInfo() {
  if (weekOffset === 0) {
    weekInfoEl.textContent = "Showing: Current week";
  } else {
    weekInfoEl.textContent = `Showing: ${weekOffset} week(s) ago`;
  }

  prevWeekBtn.disabled = weekOffset >= YEAR_CYCLE_WEEKS - 1;
}

function getBestSanskritVoice(voices) {
  if (!voices || !voices.length) {
    return null;
  }

  const preferredLangs = ["sa-IN", "hi-IN", "mr-IN", "bn-IN", "gu-IN", "en-IN"];
  for (const lang of preferredLangs) {
    const exact = voices.find((voice) => voice.lang === lang);
    if (exact) {
      return exact;
    }
  }

  for (const lang of preferredLangs) {
    const prefix = lang.split("-")[0];
    const match = voices.find((voice) => voice.lang.toLowerCase().startsWith(prefix));
    if (match) {
      return match;
    }
  }

  return voices[0];
}

function resolveSanskritVoice() {
  if (!("speechSynthesis" in window)) {
    return null;
  }

  sanskritVoice = getBestSanskritVoice(window.speechSynthesis.getVoices());
  return sanskritVoice;
}

function updateSpeakButton(isSpeaking) {
  if (!speakSanskritBtn) {
    return;
  }

  speakSanskritBtn.disabled = false;
  if (isSpeaking) {
    speakSanskritBtn.innerHTML = "Stop";
    speakSanskritBtn.setAttribute("aria-label", "Stop Sanskrit shloka audio");
  } else {
    speakSanskritBtn.innerHTML = "&#128266;";
    speakSanskritBtn.setAttribute("aria-label", "Speak Sanskrit shloka");
  }
}

function stopSpeech() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  activeUtterance = null;
  sanskritAudio.pause();
  sanskritAudio.currentTime = 0;
  if (sanskritAudioUrl) {
    URL.revokeObjectURL(sanskritAudioUrl);
    sanskritAudioUrl = null;
  }
  updateSpeakButton(false);
}

async function fetchSanskritAudioBlob(text) {
  const response = await fetch("/api/sanskrit-audio", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  if (!response.ok) {
    throw new Error(`Audio request failed: ${response.status}`);
  }

  return response.blob();
}

function speakWithBrowserFallback(text) {
  if (!("speechSynthesis" in window)) {
    throw new Error("Browser speech not available.");
  }

  const utterance = new SpeechSynthesisUtterance(text);
  const voice = sanskritVoice || resolveSanskritVoice();
  utterance.lang = voice?.lang || "hi-IN";
  if (voice) {
    utterance.voice = voice;
  }
  utterance.rate = 0.86;
  utterance.pitch = 1;

  utterance.onstart = () => {
    speechStatusEl.textContent = "Playing Sanskrit pronunciation...";
  };
  utterance.onend = () => {
    activeUtterance = null;
    updateSpeakButton(false);
    speechStatusEl.textContent = "Audio finished.";
  };
  utterance.onerror = () => {
    activeUtterance = null;
    updateSpeakButton(false);
    speechStatusEl.textContent = "Could not play pronunciation.";
  };

  activeUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

async function speakCurrentSanskrit() {
  const text = sanskritEl.textContent.trim();
  if (!text) {
    speechStatusEl.textContent = "No shloka text to speak.";
    return;
  }

  if (activeUtterance || !sanskritAudio.paused) {
    stopSpeech();
    speechStatusEl.textContent = "Audio stopped.";
    return;
  }

  updateSpeakButton(true);
  speechStatusEl.textContent = "Preparing audio...";

  try {
    const audioBlob = await fetchSanskritAudioBlob(text);
    if (sanskritAudioUrl) {
      URL.revokeObjectURL(sanskritAudioUrl);
    }
    sanskritAudioUrl = URL.createObjectURL(audioBlob);
    sanskritAudio.src = sanskritAudioUrl;
    sanskritAudio.onended = () => {
      updateSpeakButton(false);
      speechStatusEl.textContent = "Audio finished.";
    };
    sanskritAudio.onerror = () => {
      updateSpeakButton(false);
      speechStatusEl.textContent = "Could not play generated audio.";
    };
    await sanskritAudio.play();
    speechStatusEl.textContent = "Playing Sanskrit pronunciation...";
    return;
  } catch {
    stopSpeech();
  }

  try {
    updateSpeakButton(true);
    speakWithBrowserFallback(text);
  } catch {
    updateSpeakButton(false);
    speechStatusEl.textContent = "Audio unavailable. Check API key or browser speech support.";
  }
}

function renderShlokaStatic(shloka, lang, ageGroup, weekNumber) {
  const fallback = getFallbackContent(shloka, lang, ageGroup);

  sanskritEl.textContent = shloka.sanskrit;
  refEl.textContent = `${shloka.reference} | Week ${weekNumber} of ${YEAR_CYCLE_WEEKS}`;
  translitEl.textContent = fallback.transliteration;
  meaningEl.textContent = fallback.explanation;
  wisdomEl.textContent = fallback.wisdomMessage;
  speechStatusEl.textContent = "";
}

async function renderShloka() {
  const requestId = ++renderRequestId;
  const shloka = getCurrentShloka();
  const lang = translitSelect.value;
  const ageGroup = ageGroupSelect.value;
  const weekNumber = getDisplayedCycleSlot() + 1;

  renderShlokaStatic(shloka, lang, ageGroup, weekNumber);
  renderWeekInfo();

  const cached = readAICache(shloka, lang, ageGroup);
  if (cached) {
    translitEl.textContent = cached.transliteration;
    meaningEl.textContent = cached.explanation;
    wisdomEl.textContent = cached.wisdomMessage;
    aiStatusEl.textContent = "AI generated content loaded from cache.";
    return;
  }

  aiStatusEl.textContent = "Generating transliteration and explanation with GPT...";

  try {
    const aiContent = await fetchAIContent(shloka, lang, ageGroup);
    writeAICache(shloka, lang, ageGroup, aiContent);
    if (requestId !== renderRequestId) {
      return;
    }

    translitEl.textContent = aiContent.transliteration;
    meaningEl.textContent = aiContent.explanation;
    wisdomEl.textContent = aiContent.wisdomMessage;
    aiStatusEl.textContent = "Generated with GPT.";
  } catch {
    if (requestId !== renderRequestId) {
      return;
    }
    aiStatusEl.textContent = "AI unavailable. Showing built-in content.";
  }
}

function getStorageKey() {
  return `comments-week-${getDisplayedAbsoluteWeekIndex()}`;
}

function loadComments() {
  const key = getStorageKey();
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function saveComments(comments) {
  localStorage.setItem(getStorageKey(), JSON.stringify(comments));
}

function renderComments() {
  const comments = loadComments();
  if (!comments.length) {
    commentsEl.innerHTML = '<p class="empty">No comments yet. Be the first to share your reflection.</p>';
    return;
  }

  commentsEl.innerHTML = comments
    .slice()
    .reverse()
    .map((c) => `
      <article class="comment">
        <p><strong>${escapeHtml(c.name)}</strong> <span class="meta">(${escapeHtml(c.date)})</span></p>
        <p>${escapeHtml(c.thought)}</p>
        <p><strong>My practice:</strong> ${escapeHtml(c.practice)}</p>
        <div class="comment-actions">
          <button type="button" data-action="edit" data-id="${escapeHtml(c.id)}">Edit</button>
          <button type="button" class="delete" data-action="delete" data-id="${escapeHtml(c.id)}">Delete</button>
        </div>
      </article>
    `)
    .join("");
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function postComment() {
  const name = nameInput.value.trim();
  const thought = thoughtInput.value.trim();
  const practice = practiceInput.value.trim();

  if (!name || !thought || !practice) {
    statusEl.textContent = "Please fill all fields before posting.";
    return;
  }

  const comments = loadComments();
  comments.push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    thought,
    practice,
    date: new Date().toLocaleString()
  });

  saveComments(comments);
  renderComments();

  nameInput.value = "";
  thoughtInput.value = "";
  practiceInput.value = "";
  statusEl.textContent = "Comment posted successfully.";
}

function editComment(commentId) {
  const comments = loadComments();
  const index = comments.findIndex((c) => c.id === commentId);
  if (index === -1) {
    statusEl.textContent = "Comment not found.";
    return;
  }

  const current = comments[index];
  const updatedThought = prompt("Edit your thought:", current.thought);
  if (updatedThought === null) {
    return;
  }

  const updatedPractice = prompt("Edit your practice step:", current.practice);
  if (updatedPractice === null) {
    return;
  }

  const cleanThought = updatedThought.trim();
  const cleanPractice = updatedPractice.trim();

  if (!cleanThought || !cleanPractice) {
    statusEl.textContent = "Edited comment cannot be empty.";
    return;
  }

  comments[index] = {
    ...current,
    thought: cleanThought,
    practice: cleanPractice,
    date: `${current.date} (edited ${new Date().toLocaleDateString()})`
  };

  saveComments(comments);
  renderComments();
  statusEl.textContent = "Comment updated.";
}

function deleteComment(commentId) {
  const comments = loadComments();
  const filtered = comments.filter((c) => c.id !== commentId);
  if (filtered.length === comments.length) {
    statusEl.textContent = "Comment not found.";
    return;
  }

  saveComments(filtered);
  renderComments();
  statusEl.textContent = "Comment deleted.";
}

function handleCommentActions(event) {
  const target = event.target.closest("button[data-action]");
  if (!target) {
    return;
  }

  const action = target.getAttribute("data-action");
  const commentId = target.getAttribute("data-id");

  if (!commentId) {
    return;
  }

  if (action === "edit") {
    editComment(commentId);
    return;
  }

  if (action === "delete") {
    const confirmed = confirm("Delete this comment?");
    if (confirmed) {
      deleteComment(commentId);
    }
  }
}

function showPreviousWeek() {
  if (weekOffset < YEAR_CYCLE_WEEKS - 1) {
    weekOffset += 1;
    renderShloka();
    renderComments();
    statusEl.textContent = "";
  }
}

translitSelect.addEventListener("change", renderShloka);
ageGroupSelect.addEventListener("change", renderShloka);
postBtn.addEventListener("click", postComment);
prevWeekBtn.addEventListener("click", showPreviousWeek);
commentsEl.addEventListener("click", handleCommentActions);
speakSanskritBtn.addEventListener("click", speakCurrentSanskrit);

if ("speechSynthesis" in window) {
  resolveSanskritVoice();
  window.speechSynthesis.onvoiceschanged = resolveSanskritVoice;
}
updateSpeakButton(false);

renderShloka();
renderComments();
