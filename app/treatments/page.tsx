import type { Metadata } from "next";
import TreatmentsHero from "../components/treatments/TreatmentsHero";
import TreatmentSection from "../components/treatments/TreatmentSection";
import CTA from "../components/home/CTA";

export const metadata: Metadata = {
  title: "Treatments & Therapies | KinetiQ",
  description:
    "Explore KinetiQ's full range of evidence-based treatments — from manual therapy and advanced modalities to recovery, performance, and women's health care.",
};

// ─── Section data ────────────────────────────────────────────────────────────

const coreAssessment = [
  {
    title: "Postural Correction Programs",
    description:
      "Systematic retraining of faulty posture patterns to relieve chronic pain, restore spinal alignment, and improve functional movement. Combines targeted exercises, manual therapy, and postural awareness training for lasting results.",
    image: "/postureimg1.png",
  },
  {
    title: "Ergonomic Assessment & Workstation Therapy",
    description:
      "Comprehensive evaluation of your work environment to identify postural risks and strain patterns. Personalised recommendations and corrective strategies reduce injury risk and enhance long-term musculoskeletal health.",
    image: "/ergonomic1.png",
  },
  {
    title: "Mobility & Corrective Exercise Therapy",
    description:
      "Targeted improvement of joint mobility and movement quality through structured flexibility protocols, manual techniques, and corrective exercises. Addresses restrictions, compensations, and movement asymmetries to restore functional range.",
    image: "/mobility1.png",
  },
  {
    title: "Breathing & Respiratory Therapy",
    description:
      "Retraining of efficient breathing mechanics to improve posture, reduce muscular tension, and enhance neuromuscular performance. Corrects dysfunctional breathing patterns that contribute to pain, fatigue, and reduced movement quality.",
    image: "/breathing1.png",
  },
  {
    title: "EMG Biofeedback",
    description:
      "Surface electromyography provides real-time visual feedback on muscle activity, enabling precise retraining of neuromuscular activation patterns. Used to restore normal muscle function, address inhibition, and optimise movement efficiency in both rehabilitation and performance settings.",
    image: "/emg1.png",
  },
];


const manualTherapy = [
  {
    title: "Joint Mobilisation",
    description:
      "Controlled passive movement applied to joints to restore range of motion, reduce stiffness, and alleviate pain. Addresses articular restrictions and mechanical dysfunction through graded oscillatory or sustained techniques.",
    image: "/joint1.png",
  },
  {
    title: "Myofascial Release",
    description:
      "Sustained pressure applied to the fascial system to release restrictions, reduce tension, and restore unrestricted movement. Targets myofascial trigger points and adhesions contributing to pain and dysfunction.",
    image: "/myofacial1.png",
  },
  {
    title: "Trigger Point Therapy",
    description:
      "Precise pressure applied to hyperirritable points in muscle tissue to release tension, reduce referred pain, and restore normal muscle length and function. Effective for chronic muscle pain, tension headaches, and movement restrictions.",
    image: "/trigger.png",
  },
  {
    title: "Lymphatic Drainage Therapy",
    description:
      "Gentle, rhythmic techniques that stimulate lymphatic flow to reduce swelling, support immune function, and accelerate post-surgical recovery. Particularly effective for oedema management and chronic inflammatory conditions.",
    image: "/lymphatic.png",
  },
];

const painAndInjury = [
  {
    title: "ANF Therapy (Amino Neuro Frequency)",
    description:
      "Amino Neuro Frequency therapy utilises frequency-emitting discs applied to the skin to target inflammation, pain pathways, and neuromuscular dysfunction. Supports rapid symptom relief and accelerated tissue healing.",
    image: "/anf1.png",
  },
  {
    title: "Electrotherapy",
    description:
      "Therapeutic electrical stimulation to reduce pain, promote tissue repair, and improve muscle activation. Includes TENS, interferential, and neuromuscular stimulation protocols adapted to individual clinical presentation.",
    image: "/treatmenttable.jpg",
  },
  {
    title: "Class IV Laser Therapy",
    description:
      "High-powered laser energy penetrates deep tissues to stimulate cellular repair, reduce inflammation, and accelerate healing. Clinically effective for musculoskeletal injuries, chronic pain, and post-surgical recovery.",
    image: "/class1.png",
  },
  {
    title: "Shockwave Therapy",
    description:
      "Acoustic pressure waves delivered to targeted tissues to break down calcifications, stimulate healing, and relieve chronic tendinopathies. Evidence-based for plantar fasciitis, calcific shoulder, and persistent soft tissue conditions.",
    image: "/shockwave1.png",
  },
  {
    title: "Dry Needling",
    description:
      "Fine-gauge needles inserted into trigger points and dysfunctional muscle tissue to release tension, reduce pain, and restore neuromuscular function. Effective for chronic muscle pain, restricted movement, and myofascial pain syndrome.",
    image: "/dry1.png",
  },
];

const recoveryPerformance = [
  {
    title: "Sports Recovery Therapy",
    description:
      "Structured recovery protocols combining manual therapy, soft tissue techniques, and targeted rehabilitation to accelerate return to sport. Reduces delayed onset soreness, addresses overuse patterns, and supports peak performance maintenance.",
    image: "/sports1.png",
  },
  {
    title: "Kinesio Taping",
    description:
      "Elastic therapeutic tape applied to support joints, facilitate muscle function, and reduce swelling without restricting movement. Promotes proprioceptive feedback and assists active recovery throughout rehabilitation.",
    image: "/kinseo1.png",
  },
  {
    title: "Cupping Therapy",
    description:
      "Negative pressure cups applied to muscle tissue to release fascial adhesions, increase local circulation, and reduce deep muscle tension. Effective for athletic recovery, chronic tightness, and myofascial pain.",
    image: "/cupping1.png",
  },
  {
    title: "Vibration Plate Therapy",
    description:
      "Whole-body vibration used to stimulate muscle activation, improve proprioception, and accelerate neuromuscular rehabilitation. Enhances recovery outcomes, bone density, and functional performance.",
    image: "/vibration1.png",
  },
  {
    title: "BlazePod Training",
    description:
      "Reactive light-based training system that enhances neuromuscular coordination, reaction speed, and agility. Integrated into sport-specific and rehabilitation protocols for measurable functional performance gains.",
    image: "/blazepod.png",
  },
  {
    title: "Boba Pro Training",
    description:
      "Advanced proprioceptive and stability training using specialised equipment to challenge balance, coordination, and joint control. Progresses systematically from rehabilitation to sport-specific performance enhancement.",
    image: "/bob1.png",
  },
];

const womensHealth = [
  {
    title: "Women's Health Physiotherapy",
    description:
      "Comprehensive physiotherapy addressing pelvic floor dysfunction, hormonal changes, postural adaptations, and musculoskeletal conditions unique to women. Provides evidence-based care across all life stages.",
    image: "/women1.png",
  },
  {
    title: "Prenatal Physiotherapy",
    description:
      "Safe, trimester-specific exercise guidance, postural support, and pain management throughout pregnancy. Prepares the body for labour and maintains functional movement as the body adapts.",
    image: "/prenatal1.png",
  },
  {
    title: "Postnatal Physiotherapy",
    description:
      "Structured rehabilitation following childbirth to restore pelvic floor strength, core function, and physical wellbeing. Addresses diastasis recti, musculoskeletal pain, and readiness for return to activity.",
    image: "/postnatal.png",
  },
  {
    title: "Pelvic Floor Therapy",
    description:
      "Specialised assessment and rehabilitation of pelvic floor dysfunction including incontinence, prolapse, pelvic pain, and post-surgical recovery. Restores control, strength, and coordination for long-term function.",
    image: "/excerciseimg.png",
  },
];

const specialisedWellness = [
  {
    title: "Women's Health Physiotherapy",
    description:
      "Focused care for pregnancy, postnatal recovery, and hormonal changes across life stages. Addresses pelvic floor dysfunction, pregnancy-related back pain, and post-menopause fatigue. Aims to restore strength, stability, and overall well-being through targeted rehabilitation.",
    image: "/posturebanner.png",
  },
  {
    title: "Prostate Physiotherapy",
    description:
      "Targeted pelvic floor rehabilitation and recovery support for prostate-related conditions, post-surgical rehabilitation, and urinary dysfunction. Evidence-based care for men's pelvic health.",
    image: "/physio.png",
  },
  {
    title: "Palliative Physiotherapy",
    description:
      "Compassionate physiotherapy focused on comfort, maintaining mobility, and improving quality of life for individuals with life-limiting conditions. Care is adapted to energy levels, symptom management, and individual goals.",
    image: "/rehabbanner.png",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TreatmentsPage() {
  return (
    <div className="bg-[#F4F4F4]">
      <TreatmentsHero />

      <TreatmentSection
        label="Treatments"
        title="Core Assessment & Corrective Care"
        treatments={coreAssessment}
        variant="purple"
      />



      <TreatmentSection
        label="Treatments"
        title="Manual Therapy"
        treatments={manualTherapy}
        variant="purple"
      />

      <TreatmentSection
        label="Services"
        title="Pain & Injury Areas"
        treatments={painAndInjury}
        variant="purple"
      />

      <TreatmentSection
        label="Services"
        title="Recovery & Performance"
        treatments={recoveryPerformance}
        variant="purple"
      />

      <TreatmentSection
        label="Treatments"
        title="Women's Health & Prenatal Care"
        treatments={womensHealth}
        variant="purple"
      />


      <CTA />
    </div>
  );
}
