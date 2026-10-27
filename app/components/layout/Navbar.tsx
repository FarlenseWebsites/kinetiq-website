'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import KinetiQLogo from '../../../public/KinetiQLogo.avif';
import {
    aboutLinks,
    contactLinks,
    physiotherapyLinks,
    sessionLinks,
    treatmentLinks,
} from '../../lib/navigation';
import { cn } from '../../lib/utils';
import BookConsultationButton from '../ui/bookConsulationButton';
import ClientLoginButton from '../ui/clientLoginButton';

// --- Mega Menu Data ---
const physiotherapyMegaMenu = [
    {
        title: 'Physiotherapy Services',
        items: [
            {
                label: 'Orthopaedic Physiotherapy',
                href: physiotherapyLinks.orthopaedic,
            },
            { label: 'Sports Physiotherapy', href: physiotherapyLinks.sports },
            {
                label: 'Neurological Physiotherapy',
                href: physiotherapyLinks.neurological,
            },
            {
                label: 'Paediatric Physiotherapy',
                href: physiotherapyLinks.paediatric,
            },
            {
                label: 'Geriatric Physiotherapy',
                href: physiotherapyLinks.geriatric,
            },
            {
                label: 'Cardiopulmonary Physiotherapy',
                href: physiotherapyLinks.cardiopulmonary,
            },
            {
                label: 'Post-Surgical Rehabilitation',
                href: physiotherapyLinks.postSurgical,
            },
        ],
    },
    {
        title: 'Women’s Health & Recovery',
        items: [
            {
                label: 'Women’s Health Physiotherapy',
                href: physiotherapyLinks.womensHealth,
            },
            {
                label: 'Prenatal Physiotherapy',
                href: physiotherapyLinks.prenatal,
            },
            {
                label: 'Postnatal Physiotherapy',
                href: physiotherapyLinks.postnatal,
            },
            {
                label: 'Pelvic Floor Rehabilitation',
                href: physiotherapyLinks.pelvicFloor,
            },
        ],
    },
    {
        title: 'Nerve & Radiating Pain Conditions',
        items: [
            { label: 'Sciatic Nerve Pain', href: physiotherapyLinks.sciatic },
            {
                label: 'Cervical Radiculopathy',
                href: physiotherapyLinks.cervical,
            },
            { label: 'Lumbar Radiculopathy', href: physiotherapyLinks.lumbar },
            { label: 'Neuropathic Pain', href: physiotherapyLinks.neuropathic },
        ],
    },
    {
        title: 'Lifestyle & Postural Conditions',
        items: [
            {
                label: 'Postural Imbalance',
                href: physiotherapyLinks.posturalImbalance,
            },
            {
                label: 'Muscle Tightness & Imbalances',
                href: physiotherapyLinks.muscleImbalances,
            },
            {
                label: 'Repetitive Strain Injuries',
                href: physiotherapyLinks.repetitiveStrain,
            },
            {
                label: 'Ergonomic & Workplace Dysfunction',
                href: physiotherapyLinks.ergonomicWorkplace,
            },
        ],
    },
];

const treatmentMegaMenu = [
    {
        title: 'Core Assessment & Corrective Care',
        titleColor: '#88849F',
        items: [
            {
                label: 'Postural Correction Programs',
                href: treatmentLinks.posturalCorrectionPrograms,
            },
            {
                label: 'Ergonomic Assessment\n& Workplace Therapy',
                href: treatmentLinks.ergonomicAssessment,
            },
            {
                label: 'Mobility & Corrective Exercise Therapy',
                href: treatmentLinks.mobilityCorrectiveExercise,
            },
            {
                label: 'Breathing & Respiratory Therapy',
                href: treatmentLinks.breathingRespiratory,
            },
            { label: 'EMG Biofeedback', href: treatmentLinks.emgBiofeedback },
        ],
    },
    {
        title: 'Manual Therapy',
        titleColor: '#88849F',
        items: [
            {
                label: 'Joint Mobilization',
                href: treatmentLinks.jointMobilization,
            },
            {
                label: 'Myofascial Release',
                href: treatmentLinks.myofascialRelease,
            },
            {
                label: 'Trigger Point Therapy',
                href: treatmentLinks.triggerPointTherapy,
            },
            {
                label: 'Lymphatic Drainage Therapy',
                href: treatmentLinks.lymphaticDrainage,
            },
        ],
    },
    {
        title: 'Pain & Injury Areas',
        titleColor: '#88849F',
        items: [
            { label: 'ANF Therapy', href: treatmentLinks.anfTherapy },
            { label: 'Electrotherapy', href: treatmentLinks.electrotherapy },
            {
                label: 'Class IV Laser Therapy',
                href: treatmentLinks.classIVLaser,
            },
            {
                label: 'Shockwave Therapy',
                href: treatmentLinks.shockwaveTherapy,
            },
            { label: 'Dry Needling', href: treatmentLinks.dryNeedling },
        ],
    },
    {
        title: 'Recovery & Performance Therapies',
        titleColor: '#88849F',
        items: [
            {
                label: 'Sports Recovery Therapy',
                href: treatmentLinks.sportsRecovery,
            },
            { label: 'Kinesio Taping', href: treatmentLinks.kinesioTaping },
            { label: 'Cupping Therapy', href: treatmentLinks.cuppingTherapy },
            {
                label: 'Vibration Plate Therapy',
                href: treatmentLinks.vibrationPlate,
            },
            {
                label: 'BlazePod Training',
                href: treatmentLinks.blazepodTraining,
            },
            {
                label: 'Bobo Pro Training',
                href: treatmentLinks.boboProTraining,
            },
        ],
    },
    {
        title: "Women's Health & Prenatal Care",
        titleColor: '#88849F',
        items: [
            {
                label: "Women's Health Physiotherapy",
                href: treatmentLinks.womensHealthPhysio,
            },
            {
                label: 'Prenatal Physiotherapy',
                href: treatmentLinks.prenatalPhysio,
            },
            {
                label: 'Postnatal Physiotherapy',
                href: treatmentLinks.postnatalPhysio,
            },
            {
                label: 'Pelvic Floor Rehabilitation',
                href: treatmentLinks.pelvicFloorRehab,
            },
        ],
    },
];

const sessionsMenu = [
    { label: 'In Centre Treatment', href: sessionLinks.inCentre },
    { label: 'Home Visits', href: sessionLinks.homeVisits },
    { label: 'Online Physiotherapy', href: sessionLinks.online },
    { label: 'Corporate', href: sessionLinks.corporate },
];

const aboutMenu = [
    { label: 'About KinetiQ', href: aboutLinks.hero },
    { label: 'Clinical Excellence', href: aboutLinks.intro },
    { label: 'The KinetiQ Foundation', href: aboutLinks.values },
    { label: 'KinetiQ Methods', href: aboutLinks.method },
];

const contactMenu = [
    { label: 'Visit KinetiQ', href: contactLinks.centres },
    { label: 'Make an Enquiry', href: contactLinks.form },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [forceCloseDropdown, setForceCloseDropdown] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
        setForceCloseDropdown(true);
        setTimeout(() => setForceCloseDropdown(false), 150);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Added isMega property to determine layout behavior dynamically
    const navItems = [
        {
            label: 'Specialties',
            href: '/physiotherapy',
            menuType: 'physio',
            isMega: true,
        },
        {
            label: 'Sessions',
            href: '/kinetiqSessions',
            menuType: 'sessions',
            isMega: false,
        },
        {
            label: 'Treatment',
            href: '/treatments',
            menuType: 'treatment',
            isMega: true,
        },
        { label: 'About', href: '/about', menuType: 'about', isMega: false },
        {
            label: 'Contact',
            href: '/contact',
            menuType: 'contact',
            isMega: false,
        },
    ];

    return (
        <header
            className={cn(`
        fixed left-0 right-0 top-0 z-50
        w-full
        px-4 py-[clamp(0.75rem,1.8svh,1.25rem)] sm:px-6 md:px-8 lg:px-12
        xl:px-16
        ${
            isHomePage && !isScrolled
                ? 'bg-[#F4F4F4]'
                : 'border-b border-slate-200/50 bg-white bg-opacity-90 shadow-sm backdrop-blur-md'
        }
        transition-all duration-300
        
      `)}
        >
            <div
                className="
          relative
          mx-auto
          flex max-w-7xl items-center
          justify-between
          gap-4
        "
            >
                {/* Logo */}
                <Link href="/" className="flex shrink-0 items-center">
                    <Image
                        src={KinetiQLogo}
                        alt="KinetiQ Logo"
                        priority
                        className="h-auto w-[clamp(7rem,18vw,12rem)]"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden min-w-0 items-center gap-3 lg:flex xl:gap-8">
                    {navItems.map((item) => (
                        <div
                            key={item.label}
                            // If it's a mega menu, use 'static' so the absolute child targets the main navbar width.
                            // If it's a small menu, use 'relative' so it drops straight down from the text.
                            className={cn(
                                'flex h-full items-center',
                                !forceCloseDropdown && 'group',
                                item.isMega ? 'static' : 'relative'
                            )}
                        >
                            <Link
                                href={item.href}
                                onClick={handleLinkClick}
                                className="
                  text-medium
                  inline-block
                  whitespace-nowrap
                  py-4
                  font-medium
                  text-[#373355]
                  transition-colors
                  duration-300
                  hover:text-[#68638E] xl:text-[18px]
                "
                            >
                                {item.label}
                            </Link>

                            {/* ------------------------------------------------ */}
                            {/* LARGE MEGA MENUS (Centered to max-w-7xl Wrapper) */}
                            {/* ------------------------------------------------ */}

                            {/* Physiotherapy Mega Menu */}
                            {item.menuType === 'physio' && (
                                <div
                                    className="
                    invisible absolute left-0 right-0
                    top-full
                    z-50 translate-y-2 cursor-default
                    pt-6 opacity-0 transition-all
                    duration-300 ease-in-out group-hover:visible
                    group-hover:translate-y-0 group-hover:opacity-100
                  "
                                >
                                    <div className="max-w-275 mx-auto w-full cursor-auto rounded-2xl border border-slate-100 bg-white p-8 shadow-xl">
                                        <div className="grid grid-cols-4 gap-8">
                                            {physiotherapyMegaMenu.map(
                                                (group, colIdx) => (
                                                    <div key={colIdx}>
                                                        <h3 className="mb-6 text-[1.15rem] font-medium leading-tight text-[#88849F]">
                                                            {group.title}
                                                        </h3>
                                                        <ul className="space-y-4">
                                                            {group.items.map(
                                                                (
                                                                    subItem: {
                                                                        label: string;
                                                                        href: string;
                                                                    },
                                                                    itemIdx
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            itemIdx
                                                                        }
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                subItem.href
                                                                            }
                                                                            onClick={
                                                                                handleLinkClick
                                                                            }
                                                                            className="block text-[15px] text-[#9A97A9] transition-colors hover:text-[#68638E]"
                                                                        >
                                                                            {
                                                                                subItem.label
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Treatment Mega Menu */}
                            {item.menuType === 'treatment' && (
                                <div
                                    className="
                    invisible absolute left-0 right-0
                    top-full
                    z-50 translate-y-2 cursor-default
                    pt-6 opacity-0 transition-all
                    duration-300 ease-in-out group-hover:visible
                    group-hover:translate-y-0 group-hover:opacity-100
                  "
                                >
                                    <div className="max-w-275 mx-auto w-full cursor-auto rounded-2xl border border-slate-100 bg-white p-8 shadow-xl">
                                        <div className="grid grid-cols-5 gap-8">
                                            {treatmentMegaMenu.map(
                                                (group, idx) => (
                                                    <div key={idx}>
                                                        <h3
                                                            className="mb-6 text-[1.15rem] font-medium leading-tight"
                                                            style={{
                                                                color: group.titleColor,
                                                            }}
                                                        >
                                                            {group.title}
                                                        </h3>
                                                        <ul className="space-y-4">
                                                            {group.items.map(
                                                                (
                                                                    subItem: {
                                                                        label: string;
                                                                        href: string;
                                                                    },
                                                                    subIdx
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            subIdx
                                                                        }
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                subItem.href
                                                                            }
                                                                            onClick={
                                                                                handleLinkClick
                                                                            }
                                                                            className="block whitespace-pre-line text-[15px] text-[#9A97A9] transition-colors hover:text-[#986c55]"
                                                                        >
                                                                            {
                                                                                subItem.label
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* ------------------------------------------------ */}
                            {/* SMALL DROPDOWNS (Left-aligned straight down)     */}
                            {/* ------------------------------------------------ */}

                            {/* Sessions Simple Dropdown */}
                            {item.menuType === 'sessions' && (
                                <div
                                    className="
                    min-w-55 invisible absolute
                    left-0
                    top-full
                    z-50 translate-y-2 cursor-default
                    pt-6 opacity-0 transition-all
                    duration-300 ease-in-out group-hover:visible
                    group-hover:translate-y-0 group-hover:opacity-100
                  "
                                >
                                    <div className="cursor-auto rounded-2xl border border-slate-100 bg-white p-6 shadow-xl">
                                        <ul className="space-y-4">
                                            {sessionsMenu.map(
                                                (
                                                    subItem: {
                                                        label: string;
                                                        href: string;
                                                    },
                                                    idx
                                                ) => (
                                                    <li key={idx}>
                                                        <Link
                                                            href={subItem.href}
                                                            onClick={
                                                                handleLinkClick
                                                            }
                                                            className="block whitespace-nowrap text-[15px] text-[#9A97A9] transition-colors hover:text-[#986c55]"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* About Us Simple Dropdown */}
                            {item.menuType === 'about' && (
                                <div
                                    className="
                    min-w-55 invisible absolute
                    left-0
                    top-full
                    z-50 translate-y-2 cursor-default
                    pt-6 opacity-0 transition-all
                    duration-300 ease-in-out group-hover:visible
                    group-hover:translate-y-0 group-hover:opacity-100
                  "
                                >
                                    <div className="cursor-auto rounded-2xl border border-slate-100 bg-white p-6 shadow-xl">
                                        <ul className="space-y-4">
                                            {aboutMenu.map(
                                                (
                                                    subItem: {
                                                        label: string;
                                                        href: string;
                                                    },
                                                    idx
                                                ) => (
                                                    <li key={idx}>
                                                        <Link
                                                            href={subItem.href}
                                                            onClick={
                                                                handleLinkClick
                                                            }
                                                            className="block whitespace-nowrap text-[15px] text-[#9A97A9] transition-colors hover:text-[#986c55]"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* Contact Us Simple Dropdown */}
                            {item.menuType === 'contact' && (
                                <div
                                    className="
                    min-w-50 invisible absolute
                    left-0
                    top-full
                    z-50 translate-y-2 cursor-default
                    pt-6 opacity-0 transition-all
                    duration-300 ease-in-out group-hover:visible
                    group-hover:translate-y-0 group-hover:opacity-100
                  "
                                >
                                    <div className="cursor-auto rounded-2xl border border-slate-100 bg-white p-6 shadow-xl">
                                        <ul className="space-y-4">
                                            {contactMenu.map(
                                                (
                                                    subItem: {
                                                        label: string;
                                                        href: string;
                                                    },
                                                    idx
                                                ) => (
                                                    <li key={idx}>
                                                        <Link
                                                            href={subItem.href}
                                                            onClick={
                                                                handleLinkClick
                                                            }
                                                            className="block whitespace-nowrap text-[15px] text-[#9A97A9] transition-colors hover:text-[#986c55]"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Right Side */}
                <div className="flex shrink-0 items-center gap-2 sm:gap-4">
                    {/* CTA Button */}
                    <ClientLoginButton
                        className="
              hidden border-none
              bg-[#ff914d] text-white hover:bg-[#68638E]
              hover:text-white active:bg-[#373355]
              lg:inline-flex
            "
                    />
                    <BookConsultationButton
                        className="
              hidden border-none
              bg-[#ff914d] text-white hover:bg-[#68638E]
              hover:text-white active:bg-[#373355]
              lg:inline-flex
            "
                    />

                    {/* Mobile Menu Toggle */}
                    <button
                        aria-label="Toggle Menu"
                        className="
              flex items-center justify-center p-2 text-[#373355]
              transition-colors duration-300
              hover:text-[#ff914d] lg:hidden
            "
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    `
            absolute
            left-0 right-0 top-full overflow-hidden
            border-t
            border-slate-200 bg-white/95
            shadow-xl backdrop-blur-md transition-all
            duration-300 ease-in-out lg:hidden
          `,
                    isMobileMenuOpen
                        ? 'max-h-125 py-6 opacity-100'
                        : 'pointer-events-none max-h-0 py-0 opacity-0'
                )}
            >
                <div className="flex flex-col gap-1 px-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="
                py-3 text-sm font-medium
                text-[#373355] transition-colors
                duration-300 hover:text-[#986c55]
              "
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="mt-1 flex gap-3 border-t border-slate-100 pt-3">
                        <ClientLoginButton
                            className="
                w-full justify-center border-none
                bg-[#ff914d] text-white
                hover:bg-[#68638E] hover:text-white
                active:bg-[#373355]
              "
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <BookConsultationButton
                            className="
                w-full justify-center border-none
                bg-[#ff914d] text-white
                hover:bg-[#68638E] hover:text-white
                active:bg-[#373355]
              "
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
