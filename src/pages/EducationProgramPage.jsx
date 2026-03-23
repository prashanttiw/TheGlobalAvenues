import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  Megaphone,
  Network,
  ShieldCheck,
  Users,
  Workflow,
} from 'lucide-react';
import { getDegreeDetails, getProgramById } from '../data/educationProgramsData';
import { getOfferingDetail } from '../services/contentApi';
import BackNavButton from '../components/ui/BackNavButton';

const TAB_ORDER = ['undergraduate', 'postgraduate', 'doctorate'];

const PLAN_LABELS = {
  undergraduate: 'Launch Sprint',
  postgraduate: 'Growth Engine',
  doctorate: 'Enterprise Command',
};

const normalizeRegionLabel = (raw) => {
  const value = String(raw || '').trim();
  const lower = value.toLowerCase();

  if (!value) return '';
  if (
    lower === 'india' ||
    lower === 'south asia' ||
    lower === 'indian subcontinent' ||
    lower === 'india & neighbouring countries' ||
    lower === 'india and neighbouring countries'
  ) {
    return 'India & South Asia';
  }
  return value;
};

const parseList = (value) =>
  Array.from(
    new Set(
      String(value || '')
        .split(/[,|;/]/)
        .map((item) => normalizeRegionLabel(item))
        .filter(Boolean)
    )
  );

const OFFERING_ICON_MAP = {
  'fulltime-degree': Building2,
  'online-program': Megaphone,
  'vocational-courses': Network,
  'internship-abroad': Workflow,
  'summer-winter-school': Users,
};

const COMMON_REQUIREMENTS = [
  'Institution profile and priority programs',
  'Intake calendar and admission rules',
  'Brand guidelines and approved messaging',
  'Single point of contact from your team',
  'Clear response timeline for admissions decisions',
  'Regular review meeting schedule',
];

const COMMON_SUPPORT = [
  'Weekly action updates',
  'Lead and application tracking',
  'Counselor and partner communication support',
  'Issue escalation and follow-up support',
  'Quality checks before final submission',
  'Monthly summary report',
];

const VALUE_HIGHLIGHTS = [
  'Dedicated account ownership',
  'Clear communication and follow-up',
  'Step-by-step process support',
  'Quality checks before submission',
  'Regional knowledge for practical decisions',
  'Regular progress reporting',
];

export default function EducationProgramPage() {
  const { programType, degreeLevel } = useParams();
  const navigate = useNavigate();
  const [offeringDetail, setOfferingDetail] = useState(null);

  const resolvedLevel = TAB_ORDER.includes(degreeLevel) ? degreeLevel : 'undergraduate';
  const program = getProgramById(programType);
  const currentPlan =
    getDegreeDetails(programType, `${programType}-${resolvedLevel}`) || program?.degrees?.[0] || null;

  useEffect(() => {
    const controller = new AbortController();
    if (!programType) return () => controller.abort();

    const loadOfferingDetail = async () => {
      try {
        const data = await getOfferingDetail(programType, { signal: controller.signal });
        if (data?.offering) {
          setOfferingDetail(data);
        } else {
          setOfferingDetail(null);
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          setOfferingDetail(null);
        }
      }
    };

    loadOfferingDetail();
    return () => controller.abort();
  }, [programType]);

  const pageContent = useMemo(() => {
    if (!program) return null;
    const apiOffering = offeringDetail?.offering || {};
    const apiRegions = parseList(apiOffering.countries);
    return {
      ...program,
      name: apiOffering.title || program.name,
      description: apiOffering.description || program.description,
      regions: apiRegions.length > 0 ? apiRegions : program.regions,
    };
  }, [offeringDetail, program]);

  if (!pageContent || !currentPlan) {
    return (
      <div className="min-h-screen bg-background px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-foreground">Service Not Found</h1>
          <p className="mt-3 text-muted-foreground">This offering page is not available right now.</p>
          <BackNavButton label="Back to Offerings" onClick={() => navigate('/what-we-offer')} className="mt-6" />
        </div>
      </div>
    );
  }

  const Icon = OFFERING_ICON_MAP[pageContent.id] || Building2;

  const clarityCards = [
    {
      icon: Users,
      label: 'Dedicated Team',
      value: currentPlan.team || 'Dedicated partnership team for your institution',
    },
    {
      icon: ClipboardCheck,
      label: 'How We Work',
      value: currentPlan.reporting || 'Regular updates and scheduled review meetings',
    },
    {
      icon: CheckCircle2,
      label: 'Main Focus',
      value: currentPlan.focus || 'Practical execution and measurable progress',
    },
    {
      icon: Globe2,
      label: 'Coverage',
      value: pageContent.regions.join(', '),
    },
  ];

  return (
    <div className="min-h-screen bg-background px-4 pb-20 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <BackNavButton label="Back to Offerings" onClick={() => navigate('/what-we-offer')} className="mb-8" />

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-[30px] border border-border/70 bg-[linear-gradient(140deg,rgba(45,27,105,0.10)_0%,rgba(255,255,255,0.97)_50%,rgba(232,82,26,0.10)_100%)] p-6 shadow-[0_24px_68px_rgba(20,14,45,0.16)] dark:bg-[linear-gradient(140deg,rgba(45,27,105,0.36)_0%,rgba(14,10,28,0.97)_50%,rgba(232,82,26,0.16)_100%)] sm:p-8 lg:p-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <Icon className="h-3.5 w-3.5" />
            {PLAN_LABELS[resolvedLevel]} Plan
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {pageContent.name}
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {pageContent.description}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{currentPlan.description}</p>
        </motion.section>

        <section className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {clarityCards.map((item, index) => {
            const CardIcon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.32, delay: index * 0.05 }}
                className="rounded-2xl border border-border/70 bg-background p-5 shadow-sm"
              >
                <span className="mb-4 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-2.5 text-primary">
                  <CardIcon className="h-5 w-5" />
                </span>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="mt-1 text-base font-semibold leading-relaxed text-foreground">{item.value}</p>
              </motion.div>
            );
          })}
        </section>

        <section className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            <div className="rounded-2xl border border-border/70 bg-background p-6 shadow-sm sm:p-7">
              <h2 className="text-2xl font-bold text-foreground">What We Do For You</h2>
              <ul className="mt-4 space-y-3">
                {pageContent.modules.map((module) => (
                  <li key={module.title} className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{module.title}:</span> {module.detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background p-6 shadow-sm sm:p-7">
              <h3 className="text-2xl font-bold text-foreground">What You Can Expect</h3>
              <ul className="mt-4 space-y-3">
                {pageContent.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-5">
            <div className="rounded-2xl border border-border/70 bg-background p-6 shadow-sm sm:p-7">
              <h3 className="text-2xl font-bold text-foreground">What We Track</h3>
              <ul className="mt-4 space-y-3">
                {pageContent.kpis.map((kpi) => (
                  <li key={kpi} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <BarChart3 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{kpi}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background p-6 shadow-sm sm:p-7">
              <h3 className="text-2xl font-bold text-foreground">Quality & Compliance</h3>
              <ul className="mt-4 space-y-3">
                {pageContent.complianceFocus.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            <div className="rounded-2xl border border-border/70 bg-background p-6 shadow-sm sm:p-7">
              <h3 className="text-2xl font-bold text-foreground">From Your Side (Required)</h3>
              <ul className="mt-4 space-y-3">
                {COMMON_REQUIREMENTS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <ClipboardCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background p-6 shadow-sm sm:p-7">
              <h3 className="text-2xl font-bold text-foreground">Support You Will Get</h3>
              <ul className="mt-4 space-y-3">
                {COMMON_SUPPORT.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background p-6 shadow-sm sm:p-7">
              <h3 className="text-2xl font-bold text-foreground">Service Value You Can Expect</h3>
              <ul className="mt-4 space-y-3">
                {VALUE_HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-5">
            <div className="rounded-2xl border border-border/70 bg-background p-6 shadow-sm sm:p-7">
              <h3 className="text-2xl font-bold text-foreground">Coverage Regions</h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {pageContent.regions.map((region) => (
                  <span
                    key={region}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background p-6 shadow-sm sm:p-7">
              <h3 className="text-2xl font-bold text-foreground">Available Plans</h3>
              <p className="mt-2 text-sm text-muted-foreground">Pick the plan style that matches your current stage.</p>
              <div className="mt-4 space-y-3">
                {pageContent.degrees.map((plan) => {
                  const slug = plan.id.replace(`${pageContent.id}-`, '');
                  const isActivePlan = slug === resolvedLevel;
                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => navigate(`/education-program/${pageContent.id}/${slug}`)}
                      className={`w-full rounded-xl border p-3 text-left text-sm transition-colors ${
                        isActivePlan
                          ? 'border-primary/35 bg-primary/10'
                          : 'border-border/70 bg-muted/20 hover:border-primary/30 hover:bg-primary/5'
                      }`}
                    >
                      <p className="font-semibold text-foreground">{plan.level}</p>
                      <p className="mt-1 text-muted-foreground">{plan.focus || 'Structured service execution'}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-border/70 bg-background p-6 text-center shadow-sm sm:p-8">
          <h3 className="text-3xl font-bold text-foreground">Ready To Start This Service?</h3>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Speak with our team and get a clear plan for launch, execution, and reporting.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => navigate('/collaborate')}
              className="inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(92deg,#2D1B69_0%,#5B45C6_55%,#E8521A_100%)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(45,27,105,0.30)]"
            >
              Connect With Us
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => navigate('/what-we-offer')}
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Back To Offerings
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
