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
    title: "Postural Correction Therapy",
    description:
      "Systematic retraining of faulty posture patterns to relieve chronic pain, restore spinal alignment, and improve functional movement. Combines targeted exercises, manual therapy, and postural awareness training for lasting results.",
    image: "/posturebanner.png",
  },
  {
    title: "Ergonomic Assessment & Workstation Therapy",
    description:
      "Comprehensive evaluation of your work environment to identify postural risks and strain patterns. Personalised recommendations and corrective strategies reduce injury risk and enhance long-term musculoskeletal health.",
    image: "/corporate.png",
  },
  {
    title: "Mobility & Corrective Exercise Therapy",
    description:
      "Targeted improvement of joint mobility and movement quality through structured flexibility protocols, manual techniques, and corrective exercises. Addresses restrictions, compensations, and movement asymmetries to restore functional range.",
    image: "/excerciseimg.png",
  },
  {
    title: "Breathing & Respiratory Therapy",
    description:
      "Retraining of efficient breathing mechanics to improve posture, reduce muscular tension, and enhance neuromuscular performance. Corrects dysfunctional breathing patterns that contribute to pain, fatigue, and reduced movement quality.",
    image: "/rehabbanner.png",
  },
  {
    title: "EMG Biofeedback",
    description:
      "Surface electromyography provides real-time visual feedback on muscle activity, enabling precise retraining of neuromuscular activation patterns. Used to restore normal muscle function, address inhibition, and optimise movement efficiency in both rehabilitation and performance settings.",
    image: "/physio.png",
  },
];


const manualTherapy = [
  {
    title: "Joint Mobilisation",
    description:
      "Controlled passive movement applied to joints to restore range of motion, reduce stiffness, and alleviate pain. Addresses articular restrictions and mechanical dysfunction through graded oscillatory or sustained techniques.",
    image: "/massageimg.png",
  },
  {
    title: "Myofascial Release",
    description:
      "Sustained pressure applied to the fascial system to release restrictions, reduce tension, and restore unrestricted movement. Targets myofascial trigger points and adhesions contributing to pain and dysfunction.",
    image: "/massageimg.png",
  },
  {
    title: "Trigger Point Therapy",
    description:
      "Precise pressure applied to hyperirritable points in muscle tissue to release tension, reduce referred pain, and restore normal muscle length and function. Effective for chronic muscle pain, tension headaches, and movement restrictions.",
    image: "/excerciseimg.png",
  },
  {
    title: "Lymphatic Drainage Therapy",
    description:
      "Gentle, rhythmic techniques that stimulate lymphatic flow to reduce swelling, support immune function, and accelerate post-surgical recovery. Particularly effective for oedema management and chronic inflammatory conditions.",
    image: "/massageimg.png",
  },
];

const painAndInjury = [
  {
    title: "ANF Therapy (Gamma Neuromuscular)",
    description:
      "Amino Neuro Frequency therapy utilises frequency-emitting discs applied to the skin to target inflammation, pain pathways, and neuromuscular dysfunction. Supports rapid symptom relief and accelerated tissue healing.",
    image: "/physio.png",
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
    image: "/physio.png",
  },
  {
    title: "Shockwave Therapy",
    description:
      "Acoustic pressure waves delivered to targeted tissues to break down calcifications, stimulate healing, and relieve chronic tendinopathies. Evidence-based for plantar fasciitis, calcific shoulder, and persistent soft tissue conditions.",
    image: "/massageimg.png",
  },
  {
    title: "Dry Needling",
    description:
      "Fine-gauge needles inserted into trigger points and dysfunctional muscle tissue to release tension, reduce pain, and restore neuromuscular function. Effective for chronic muscle pain, restricted movement, and myofascial pain syndrome.",
    image: "/excerciseimg.png",
  },
];

const recoveryPerformance = [
  {
    title: "Sports Recovery Therapy",
    description:
      "Structured recovery protocols combining manual therapy, soft tissue techniques, and targeted rehabilitation to accelerate return to sport. Reduces delayed onset soreness, addresses overuse patterns, and supports peak performance maintenance.",
    image: "/fitnessbanner.png",
  },
  {
    title: "Kinesio Taping",
    description:
      "Elastic therapeutic tape applied to support joints, facilitate muscle function, and reduce swelling without restricting movement. Promotes proprioceptive feedback and assists active recovery throughout rehabilitation.",
    image: "/excerciseimg.png",
  },
  {
    title: "Cupping Therapy",
    description:
      "Negative pressure cups applied to muscle tissue to release fascial adhesions, increase local circulation, and reduce deep muscle tension. Effective for athletic recovery, chronic tightness, and myofascial pain.",
    image: "/massageimg.png",
  },
  {
    title: "Vibration Plate Therapy",
    description:
      "Whole-body vibration used to stimulate muscle activation, improve proprioception, and accelerate neuromuscular rehabilitation. Enhances recovery outcomes, bone density, and functional performance.",
    image: "/fitnessbanner.png",
  },
  {
    title: "BlazePod Training",
    description:
      "Reactive light-based training system that enhances neuromuscular coordination, reaction speed, and agility. Integrated into sport-specific and rehabilitation protocols for measurable functional performance gains.",
    image: "/fitnessbanner.png",
  },
  {
    title: "Boba Pro Training",
    description:
      "Advanced proprioceptive and stability training using specialised equipment to challenge balance, coordination, and joint control. Progresses systematically from rehabilitation to sport-specific performance enhancement.",
    image: "/fitnessbanner.png",
  },
];

const womensHealth = [
  {
    title: "Women's Health Physiotherapy",
    description:
      "Comprehensive physiotherapy addressing pelvic floor dysfunction, hormonal changes, postural adaptations, and musculoskeletal conditions unique to women. Provides evidence-based care across all life stages.",
    image: "/excerciseimg.png",
  },
  {
    title: "Prenatal Physiotherapy",
    description:
      "Safe, trimester-specific exercise guidance, postural support, and pain management throughout pregnancy. Prepares the body for labour and maintains functional movement as the body adapts.",
    image: "/excerciseimg.png",
  },
  {
    title: "Postnatal Physiotherapy",
    description:
      "Structured rehabilitation following childbirth to restore pelvic floor strength, core function, and physical wellbeing. Addresses diastasis recti, musculoskeletal pain, and readiness for return to activity.",
    image: "/excerciseimg.png",
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
    title: "Postural Correction Programs",
    description:
      "Structured, long-term programs combining manual therapy, corrective exercise, and movement re-education to achieve lasting postural improvements. Tailored to occupational, sport, and lifestyle demands.",
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
        label="Assessment"
        title="Core Assessment & Corrective Care"
        subtitle="Foundational evaluation and targeted corrective interventions to restore optimal posture, alignment, and movement efficiency."
        treatments={coreAssessment}
        variant="purple"
      />


      <TreatmentSection
        label="Hands-On"
        title="Manual Therapy"
        subtitle="Hands-on techniques to relieve pain, restore mobility, and improve joint and soft tissue function."
        treatments={manualTherapy}
        variant="purple"
      />

      <TreatmentSection
        label="Advanced Modalities"
        title="Pain & Injury Areas"
        subtitle="Advanced clinical technologies targeting acute and chronic pain, tissue healing, and neuromuscular rehabilitation."
        treatments={painAndInjury}
        variant="orange"
      />

      <TreatmentSection
        label="Performance"
        title="Recovery & Performance"
        subtitle="Targeted recovery and performance therapies to enhance resilience, accelerate healing, and optimise physical capacity."
        treatments={recoveryPerformance}
        variant="purple"
      />

      <TreatmentSection
        label="Women's Health"
        title="Women's Health & Prenatal Care"
        subtitle="Specialised physiotherapy care throughout pregnancy, postpartum recovery, and women's specific health needs."
        treatments={womensHealth}
        variant="orange"
      />

      <TreatmentSection
        label="Wellness"
        title="Specialised Wellness Therapies"
        subtitle="Holistic and specialised therapies that complement clinical rehabilitation and support whole-body health."
        treatments={specialisedWellness}
        variant="purple"
      />

      <CTA />
    </div>
  );
}
