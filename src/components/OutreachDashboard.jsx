import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Send,
  Server,
  CheckCircle2,
  Users,
  ExternalLink,
  Copy,
  Check,
  Eye,
  Plus,
  Search,
  Terminal,
  Download,
  MapPin,
  Sparkles,
  ChevronDown,
  ChevronUp,
  X,
  RefreshCw,
  MousePointerClick,
  Play,
  Zap,
  Loader2,
  AlertCircle,
  RotateCw
} from "lucide-react";

const INITIAL_LEADS = [
  {
    id: 1,
    business_name: "Apex Painting Contractors",
    contact_name: "Mr. David Miller",
    email: "david@apexpaintingtx.com",
    niche: "painting",
    city: "Houston, TX",
    demo_url: "https://alvoratechhq.com/painting",
    status: "pending"
  },
  {
    id: 2,
    business_name: "Sparkle Commercial Cleaning",
    contact_name: "Mrs. Sarah Jenkins",
    email: "sarah@sparklecleanfl.com",
    niche: "cleaning",
    city: "Miami, FL",
    demo_url: "https://alvoratechhq.com/cleaning",
    status: "pending"
  },
  {
    id: 3,
    business_name: "Prime Flow Plumbing & Drain",
    contact_name: "Mr. Michael Ross",
    email: "michael@primeflowplumbing.com",
    niche: "plumbing-services",
    city: "Dallas, TX",
    demo_url: "https://alvoratechhq.com/plumbing-services",
    status: "pending"
  },
  {
    id: 4,
    business_name: "Crown Auto Care & Transmission",
    contact_name: "Mr. Robert Chen",
    email: "robert@crownautoca.com",
    niche: "auto-repair",
    city: "Los Angeles, CA",
    demo_url: "https://alvoratechhq.com/auto-repair",
    status: "pending"
  },
  {
    id: 5,
    business_name: "Summit Ridge General Contractors",
    contact_name: "Mr. James Taylor",
    email: "james@summitridgebuilders.com",
    niche: "contractor",
    city: "Denver, CO",
    demo_url: "https://alvoratechhq.com/contractor",
    status: "pending"
  },
  {
    id: 6,
    business_name: "Pearl Smiles Family Dental",
    contact_name: "Dr. Emily Carter",
    email: "emily@pearlsmilesdental.com",
    niche: "dental-care",
    city: "Phoenix, AZ",
    demo_url: "https://alvoratechhq.com/dental-care",
    status: "pending"
  },
  {
    id: 7,
    business_name: "Heritage Legal Group",
    contact_name: "Mr. Brian Vance",
    email: "brian@heritagelegalgroup.com",
    niche: "personal-injury",
    city: "Atlanta, GA",
    demo_url: "https://alvoratechhq.com/personal-injury",
    status: "pending"
  },
  {
    id: 8,
    business_name: "Swift Towing & Recovery",
    contact_name: "Mr. Marcus Washington",
    email: "marcus@swifttowingcharlotte.com",
    niche: "towing-company",
    city: "Charlotte, NC",
    demo_url: "https://alvoratechhq.com/towing-company",
    status: "pending"
  },
  {
    id: 9,
    business_name: "Green Canopy Tree Service",
    contact_name: "Mr. Daniel Foster",
    email: "daniel@greencanopytrees.com",
    niche: "tree-removal",
    city: "Seattle, WA",
    demo_url: "https://alvoratechhq.com/tree-removal",
    status: "pending"
  },
  {
    id: 10,
    business_name: "Volt Pro Electrical Contractors",
    contact_name: "Mr. Kevin Adams",
    email: "kevin@voltproelectric.com",
    niche: "electrical",
    city: "Austin, TX",
    demo_url: "https://alvoratechhq.com/electrical",
    status: "pending"
  },
  {
    id: 11,
    business_name: "Prestige Hardwood & Epoxy Flooring",
    contact_name: "Mr. Eric Scott",
    email: "eric@prestigeflooringfl.com",
    niche: "flooring",
    city: "Tampa, FL",
    demo_url: "https://alvoratechhq.com/flooring",
    status: "pending"
  },
  {
    id: 12,
    business_name: "Verdant Landscape Design",
    contact_name: "Mrs. Laura Mitchell",
    email: "laura@verdantlandscapesaz.com",
    niche: "landscaping",
    city: "Scottsdale, AZ",
    demo_url: "https://alvoratechhq.com/landscaping",
    status: "pending"
  },
  {
    id: 13,
    business_name: "KeyMaster Mobile Locksmith",
    contact_name: "Mr. Jason Reed",
    email: "jason@keymasterlocksmiths.com",
    niche: "locksmith",
    city: "Chicago, IL",
    demo_url: "https://alvoratechhq.com/locksmith",
    status: "pending"
  },
  {
    id: 14,
    business_name: "Shield Pro Pest Solutions",
    contact_name: "Mr. Thomas Wright",
    email: "thomas@shieldpesttx.com",
    niche: "pest-control",
    city: "San Antonio, TX",
    demo_url: "https://alvoratechhq.com/pest-control",
    status: "pending"
  },
  {
    id: 15,
    business_name: "Crystal Clear Pressure Washing",
    contact_name: "Mr. Anthony Diaz",
    email: "anthony@crystalpressurefl.com",
    niche: "pressure-demo",
    city: "Orlando, FL",
    demo_url: "https://alvoratechhq.com/pressure-demo",
    status: "pending"
  }
];

const SENDERS = [
  {
    id: "lucas",
    name: "Lucas | Alvora Tech",
    email: "lucas@alvoratechhq.com",
    role: "Senior Growth Partner",
    limit: 25
  },
  {
    id: "james",
    name: "James | Alvora Tech",
    email: "james@alvoratechhq.com",
    role: "Client Solutions Strategist",
    limit: 25
  },
  {
    id: "oliver",
    name: "Oliver | Alvora Tech",
    email: "oliver@alvoratechhq.com",
    role: "Agency Director",
    limit: 25
  }
];

export const getDemoUrl = (lead) => {
  if (lead && typeof lead.demo_url === "string" && (lead.demo_url.startsWith("http://") || lead.demo_url.startsWith("https://"))) {
    return lead.demo_url.trim();
  }
  const cleanNiche = (lead?.niche || "painting").trim().toLowerCase();
  return `https://alvoratechhq.com/${cleanNiche}`;
};

export default function OutreachDashboard() {
  const [leads, setLeads] = useState(INITIAL_LEADS);
  const [isLoadingLeads, setIsLoadingLeads] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNiche, setSelectedNiche] = useState("all");
  const [previewLead, setPreviewLead] = useState(null);
  const [copiedCmd, setCopiedCmd] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  // Tracking metrics
  const [trackingSummary, setTrackingSummary] = useState({
    unique_opened: 0,
    total_opens: 0,
    unique_clicked: 0,
    total_clicks: 0,
    total_tracked_leads: 0,
  });
  const [trackingRecords, setTrackingRecords] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Lead Extraction State
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractCount, setExtractCount] = useState(25);
  const [extractNiche, setExtractNiche] = useState("all");
  const [extractStatus, setExtractStatus] = useState("");
  const [extractAlert, setExtractAlert] = useState(null);

  // Outreach Dispatch State
  const [isDispatching, setIsDispatching] = useState(false);
  const [dispatchRunning, setDispatchRunning] = useState(false);
  const [dispatchLogs, setDispatchLogs] = useState([]);
  const [dispatchAlert, setDispatchAlert] = useState(null);
  const logTerminalRef = useRef(null);

  const [newLead, setNewLead] = useState({
    business_name: "",
    contact_name: "",
    email: "",
    niche: "painting",
    city: "Houston, TX",
    demo_url: "https://alvoratechhq.com/painting"
  });

  const fetchLeads = async () => {
    setIsLoadingLeads(true);
    try {
      const res = await fetch("/api/extract?get_leads=true");
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.leads) && data.leads.length > 0) {
          const sanitized = data.leads.map((l) => ({
            ...l,
            demo_url: getDemoUrl(l),
          }));
          setLeads(sanitized);
        }
      }
    } catch (err) {
      console.warn("Notice loading saved leads:", err);
    } finally {
      setIsLoadingLeads(false);
    }
  };

  const fetchTracking = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch("/api/track?stats=true");
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setTrackingSummary(data.summary || {});
          setTrackingRecords(data.records || []);
        }
      }
    } catch (err) {
      console.warn("Tracking API fetch notice:", err);
    } finally {
      setIsRefreshing(false);
    }
  };

  const fetchDispatchStatus = async () => {
    try {
      const res = await fetch("/api/dispatch?status=true");
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setDispatchRunning(Boolean(data.isRunning));
          if (Array.isArray(data.lastLogs) && data.lastLogs.length > 0) {
            setDispatchLogs(data.lastLogs);
          }
        }
      }
    } catch (err) {
      console.warn("Dispatch status notice:", err);
    }
  };

  useEffect(() => {
    if (logTerminalRef.current) {
      logTerminalRef.current.scrollTop = logTerminalRef.current.scrollHeight;
    }
  }, [dispatchLogs]);

  useEffect(() => {
    fetchLeads();
    fetchTracking();
    fetchDispatchStatus();

    const trackInterval = setInterval(fetchTracking, 15000);
    return () => clearInterval(trackInterval);
  }, []);

  useEffect(() => {
    let dispatchInterval = null;
    if (dispatchRunning) {
      dispatchInterval = setInterval(fetchDispatchStatus, 2500);
    }
    return () => {
      if (dispatchInterval) clearInterval(dispatchInterval);
    };
  }, [dispatchRunning]);

  const handleExtractLeads = async () => {
    if (isExtracting) return;
    setIsExtracting(true);
    setExtractAlert(null);
    setExtractStatus("Connecting to Google Places API (New) for US Metro Areas...");

    try {
      setTimeout(() => {
        setExtractStatus("Crawling company websites for verified business emails...");
      }, 2000);

      const payload = {
        count: extractCount,
        niche: extractNiche === "all" ? null : extractNiche,
      };

      const res = await fetch("/api/extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setExtractAlert({
          type: "success",
          message: `Extracted ${data.added_count} verified US prospects. Saved to database and CSV.`,
        });
        await fetchLeads();
      } else {
        setExtractAlert({
          type: "error",
          message: data.error || "Failed to extract leads.",
        });
      }
    } catch (err) {
      setExtractAlert({
        type: "error",
        message: `Extraction error: ${err.message}`,
      });
    } finally {
      setIsExtracting(false);
      setExtractStatus("");
    }
  };

  const handleStartDispatch = async (mode = "send") => {
    if (isDispatching) return;
    setIsDispatching(true);
    setDispatchAlert(null);

    try {
      const res = await fetch("/api/dispatch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode }),
      });

      const data = await res.json();

      if (data.success) {
        setDispatchRunning(true);
        setDispatchAlert({
          type: "success",
          message: data.message || `Outreach engine active in ${mode} mode.`,
        });
        await fetchDispatchStatus();
      } else {
        setDispatchAlert({
          type: "error",
          message: data.error || "Failed to launch outreach engine.",
        });
      }
    } catch (err) {
      setDispatchAlert({
        type: "error",
        message: `Dispatch error: ${err.message}`,
      });
    } finally {
      setIsDispatching(false);
    }
  };

  const niches = ["all", ...Array.from(new Set(leads.map((l) => l.niche)))];

  const getTrackingForLead = (email) => {
    if (!email || !trackingRecords.length) return null;
    return trackingRecords.find(
      (r) => r.email && r.email.toLowerCase() === email.toLowerCase()
    );
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      (lead.business_name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.contact_name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.city || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.email || "").toLowerCase().includes(searchTerm.toLowerCase());
    const matchesNiche = selectedNiche === "all" || lead.niche === selectedNiche;
    return matchesSearch && matchesNiche;
  });

  const handleAddLead = (e) => {
    e.preventDefault();
    if (!newLead.business_name || !newLead.email) return;
    const created = {
      id: Date.now(),
      ...newLead,
      status: "pending",
      sent_at: "",
      sent_by: ""
    };
    setLeads([created, ...leads]);
    setShowAddModal(false);
    setNewLead({
      business_name: "",
      contact_name: "",
      email: "",
      niche: "painting",
      city: "Houston, TX",
      demo_url: "https://alvoratechhq.com/painting"
    });
  };

  const handleDownloadCSV = () => {
    const header = "business_name,contact_name,email,niche,city,demo_url,status,sent_at,sent_by\n";
    const rows = leads
      .map(
        (l) =>
          `"${(l.business_name || "").replace(/"/g, '""')}","${(l.contact_name || "").replace(/"/g, '""')}","${l.email}","${l.niche}","${l.city}","${l.demo_url}","${l.status}","${l.sent_at || ""}","${l.sent_by || ""}"`
      )
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "leads_alvoratech.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sentCount = leads.filter((l) => l.status === "sent").length;
  const openRate =
    sentCount > 0
      ? ((trackingSummary.unique_opened / sentCount) * 100).toFixed(1)
      : trackingSummary.unique_opened > 0
      ? "100.0"
      : "0.0";

  const clickRate =
    sentCount > 0
      ? ((trackingSummary.unique_clicked / sentCount) * 100).toFixed(1)
      : trackingSummary.unique_clicked > 0
      ? "100.0"
      : "0.0";

  return (
    <div className="min-h-screen bg-[#0A0F1D] text-slate-100 font-sans pb-20">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-[#0A0F1D]/95 sticky top-0 z-40 px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 transition"
          >
            &larr; Back to Alvora Tech
          </a>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="hidden sm:inline text-xs font-semibold text-slate-400 uppercase tracking-wider">
            USA Cold Outreach Operations
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              fetchTracking();
              fetchLeads();
              fetchDispatchStatus();
            }}
            disabled={isRefreshing || isLoadingLeads}
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-md border border-slate-700 transition"
            title="Refresh database and tracking stats"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing || isLoadingLeads ? "animate-spin text-blue-400" : ""}`} />
            <span className="hidden sm:inline">Sync Data</span>
          </button>
          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Active
          </span>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6 space-y-6">
        
        {/* Top Control Bar & Actions */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Alvora Tech US Outreach Command
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              75 daily pitches rotating across Lucas, James, and Oliver targeting high-value US service contractors and professional practices.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadCSV}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
            >
              <Download className="w-3.5 h-3.5" />
              Export CSV
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Lead
            </button>
          </div>
        </div>

        {/* 4 Key Metric Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <span className="text-[11px] font-semibold uppercase text-slate-400">US Prospects Queue</span>
            <div className="text-xl font-bold text-white mt-1">{leads.length} Leads</div>
            <p className="text-[10px] text-slate-400 mt-0.5">Database & CSV pool</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <span className="text-[11px] font-semibold uppercase text-slate-400">Active Senders</span>
            <div className="text-xl font-bold text-white mt-1">3 Accounts</div>
            <p className="text-[10px] text-slate-400 mt-0.5">Lucas, James, Oliver (75 cap)</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <span className="text-[11px] font-semibold uppercase text-emerald-400">Unique Opens</span>
            <div className="text-xl font-bold text-emerald-300 mt-1">
              {trackingSummary.unique_opened}{" "}
              <span className="text-xs font-normal text-emerald-400">({openRate}%)</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">{trackingSummary.total_opens} views logged</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <span className="text-[11px] font-semibold uppercase text-blue-400">Demo Visits</span>
            <div className="text-xl font-bold text-blue-300 mt-1">
              {trackingSummary.unique_clicked}{" "}
              <span className="text-xs font-normal text-blue-400">({clickRate}%)</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">{trackingSummary.total_clicks} clicks verified</p>
          </div>
        </div>

        {/* Action Engine: Extraction & Dispatch Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* Panel 1: Lead Extraction */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-white">US Lead Extraction Engine</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Queries Google Places API (New) across Texas, Florida, California, Georgia, Arizona, Colorado, North Carolina, and Washington.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <label className="text-[10px] uppercase font-semibold text-slate-400 block mb-1">Batch Size</label>
                <select
                  value={extractCount}
                  onChange={(e) => setExtractCount(Number(e.target.value))}
                  disabled={isExtracting}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                >
                  <option value={10}>10 Verified Leads</option>
                  <option value={25}>25 Verified Leads</option>
                  <option value={50}>50 Verified Leads</option>
                  <option value={75}>75 Verified Leads</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase font-semibold text-slate-400 block mb-1">Industry</label>
                <select
                  value={extractNiche}
                  onChange={(e) => setExtractNiche(e.target.value)}
                  disabled={isExtracting}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500 capitalize"
                >
                  <option value="all">All 15 Industries</option>
                  <option value="cleaning">Cleaning Services</option>
                  <option value="painting">Painting Contractors</option>
                  <option value="plumbing-services">Plumbing & Drain</option>
                  <option value="auto-repair">Auto Repair</option>
                  <option value="contractor">General Contractors</option>
                  <option value="dental-care">Dental Practices</option>
                  <option value="personal-injury">Legal / Injury</option>
                  <option value="towing-company">Towing & Roadside</option>
                  <option value="tree-removal">Tree Removal</option>
                  <option value="electrical">Electrical Contractors</option>
                  <option value="flooring">Flooring Specialists</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="locksmith">Locksmith Services</option>
                  <option value="pest-control">Pest Exterminators</option>
                  <option value="pressure-demo">Pressure Washing</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleExtractLeads}
              disabled={isExtracting}
              className={`w-full py-2 px-4 rounded-lg text-xs font-bold text-white transition flex items-center justify-center gap-2 ${
                isExtracting ? "bg-blue-600/60 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500"
              }`}
            >
              {isExtracting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Extracting US Leads...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Extract Fresh US Leads Now</span>
                </>
              )}
            </button>

            {isExtracting && (
              <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-800 text-[11px] text-blue-200 flex items-center gap-2">
                <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0 text-blue-400" />
                <span>{extractStatus || "Running extraction..."}</span>
              </div>
            )}

            {extractAlert && (
              <div
                className={`p-2.5 rounded-lg border text-[11px] flex items-center justify-between ${
                  extractAlert.type === "success"
                    ? "bg-emerald-950/40 border-emerald-800 text-emerald-200"
                    : "bg-rose-950/40 border-rose-800 text-rose-200"
                }`}
              >
                <span>{extractAlert.message}</span>
                <button onClick={() => setExtractAlert(null)} className="text-slate-400 hover:text-white p-0.5">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Panel 2: Email Pitch Dispatcher */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-white">Email Dispatch Engine</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Evenly rotates outreach pitches across lucas, james, and oliver (@alvoratechhq.com) with embedded tracking.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleStartDispatch("dry-run")}
                disabled={isDispatching || dispatchRunning}
                className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              >
                <Zap className="w-3.5 h-3.5 inline mr-1 text-blue-400" />
                Simulate Run
              </button>

              <button
                onClick={() => handleStartDispatch("send")}
                disabled={isDispatching || dispatchRunning}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold text-white transition flex items-center justify-center gap-1.5 ${
                  dispatchRunning ? "bg-emerald-600/60 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-500"
                }`}
              >
                {dispatchRunning ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending Batch...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Start 75 Daily Batch</span>
                  </>
                )}
              </button>
            </div>

            {/* Embedded Monospace Terminal */}
            <div className="bg-black/90 rounded-lg border border-slate-800 overflow-hidden text-xs font-mono">
              <div className="px-3 py-1.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-emerald-400" />
                  outreach.log &bull; Live Tail
                </span>
                <button onClick={fetchDispatchStatus} className="text-slate-400 hover:text-white">
                  Refresh
                </button>
              </div>
              <div ref={logTerminalRef} className="p-3 max-h-36 overflow-y-auto space-y-1 select-text text-[11px]">
                {dispatchLogs.length > 0 ? (
                  dispatchLogs.map((l, i) => (
                    <div
                      key={i}
                      className={
                        l.includes("ERROR")
                          ? "text-rose-400"
                          : l.includes("SUCCESS") || l.includes("Sent to")
                          ? "text-emerald-400"
                          : l.includes("===")
                          ? "text-amber-400"
                          : "text-slate-300"
                      }
                    >
                      {l}
                    </div>
                  ))
                ) : (
                  <div className="text-slate-500 italic text-center py-2">
                    Standby. Click "Start 75 Daily Batch" or "Simulate Run" to launch.
                  </div>
                )}
              </div>
            </div>

            {dispatchAlert && (
              <div
                className={`p-2.5 rounded-lg border text-[11px] flex items-center justify-between ${
                  dispatchAlert.type === "success"
                    ? "bg-emerald-950/40 border-emerald-800 text-emerald-200"
                    : "bg-rose-950/40 border-rose-800 text-rose-200"
                }`}
              >
                <span>{dispatchAlert.message}</span>
                <button onClick={() => setDispatchAlert(null)} className="text-slate-400 hover:text-white p-0.5">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Live Prospect Engagement Feed (When opens exist) */}
        {trackingRecords.length > 0 && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Live Prospect Views</span>
              <span className="text-[11px] text-slate-400">{trackingRecords.length} records</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {trackingRecords.slice(0, 6).map((rec, i) => (
                <div key={i} className="bg-slate-950 border border-slate-800/80 rounded-lg p-2.5 text-xs">
                  <p className="font-semibold text-white truncate">{rec.business_name}</p>
                  <p className="text-[11px] font-mono text-slate-400 truncate">{rec.email}</p>
                  <div className="flex items-center gap-2 mt-1">
                    {rec.open_count > 0 && (
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                        Opened {rec.open_count}x
                      </span>
                    )}
                    {rec.click_count > 0 && (
                      <span className="text-[10px] text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">
                        Clicked Demo ({rec.click_count}x)
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Prospects Pipeline Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <div className="p-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                US Prospects Pipeline ({filteredLeads.length})
              </h3>
              {isLoadingLeads && <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-400" />}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={fetchLeads}
                disabled={isLoadingLeads}
                className="p-1.5 bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-lg text-slate-400 hover:text-white transition"
                title="Reload leads"
              >
                <RotateCw className={`w-3.5 h-3.5 ${isLoadingLeads ? "animate-spin text-blue-400" : ""}`} />
              </button>

              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search US businesses, cities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 w-52"
                />
              </div>

              <select
                value={selectedNiche}
                onChange={(e) => setSelectedNiche(e.target.value)}
                className="py-1 px-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-300 focus:outline-none focus:border-blue-500 capitalize"
              >
                {niches.map((n) => (
                  <option key={n} value={n}>
                    {n === "all" ? "All Industries" : n.replace("-", " ")}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950/80 text-slate-400 uppercase tracking-wider border-b border-slate-800 text-[11px]">
                <tr>
                  <th className="py-2.5 px-3 font-semibold">Business & Contact</th>
                  <th className="py-2.5 px-3 font-semibold">Location (State/Metro)</th>
                  <th className="py-2.5 px-3 font-semibold">Industry</th>
                  <th className="py-2.5 px-3 font-semibold">Live Demo Link</th>
                  <th className="py-2.5 px-3 font-semibold">Status</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredLeads.map((lead, idx) => {
                  const tracking = getTrackingForLead(lead.email);
                  const isOpened = tracking && tracking.open_count > 0;
                  const isClicked = tracking && tracking.click_count > 0;

                  return (
                    <tr key={lead.id || lead.email || idx} className="hover:bg-slate-800/40 transition">
                      <td className="py-3 px-3">
                        <div className="font-semibold text-white">{lead.business_name}</div>
                        <div className="text-[11px] text-slate-400 font-mono">{lead.email}</div>
                      </td>
                      <td className="py-3 px-3 text-slate-300">
                        <span className="inline-flex items-center gap-1 text-[11px]">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {lead.city}
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] capitalize">
                          {(lead.niche || "services").replace("-", " ")}
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <a
                          href={getDemoUrl(lead)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline font-mono text-[11px] inline-flex items-center gap-1"
                        >
                          {getDemoUrl(lead).replace("https://alvoratechhq.com", "")}
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </td>
                      <td className="py-3 px-3">
                        {isClicked ? (
                          <span className="text-[10px] font-semibold text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30">
                            Clicked Demo ({tracking.click_count}x)
                          </span>
                        ) : isOpened ? (
                          <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                            Opened ({tracking.open_count}x)
                          </span>
                        ) : lead.status === "sent" ? (
                          <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                            Delivered
                          </span>
                        ) : (
                          <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                            Pending
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={() => setPreviewLead(lead)}
                          className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-medium border border-slate-700 transition"
                        >
                          Preview
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal: Preview Pitch */}
      {previewLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <span className="text-[10px] uppercase font-semibold text-blue-400">US Pitch Preview</span>
                <h3 className="text-base font-bold text-white">{previewLead.business_name}</h3>
              </div>
              <button onClick={() => setPreviewLead(null)} className="text-slate-400 hover:text-white p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-[11px] font-mono bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1">
              <div><span className="text-slate-500">From:</span> <span className="text-emerald-400">Lucas | Alvora Tech &lt;lucas@alvoratechhq.com&gt;</span></div>
              <div><span className="text-slate-500">To:</span> <span className="text-slate-200">{previewLead.email}</span></div>
              <div><span className="text-slate-500">Subject:</span> <span className="text-white">Quick question regarding {previewLead.business_name}'s website</span></div>
            </div>

            <div className="text-xs text-slate-300 space-y-3 leading-relaxed p-4 bg-slate-950/60 rounded-lg border border-slate-800">
              <p>Hello {previewLead.contact_name || "Team"},</p>
              <p>
                I came across <strong>{previewLead.business_name}</strong> while researching top {(previewLead.niche || "services").replace("-", " ")} companies in {previewLead.city}.
              </p>
              <p>
                When potential clients in {previewLead.city} search for {(previewLead.niche || "services").replace("-", " ")} services on Google Maps or their smartphones, they want fast answers and instant credibility. Without a modern website featuring click-to-call, instant online quote requests, and verified reviews, high-value jobs often go to competitors ranking above you.
              </p>
              <div className="p-3 rounded bg-blue-950/30 border border-blue-900/40 text-blue-200 text-[11px]">
                <p className="font-semibold mb-1">Live demonstration website for your industry:</p>
                <a href={getDemoUrl(previewLead)} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-mono">
                  {getDemoUrl(previewLead)}
                </a>
              </div>
              <p>
                Would you be open to a brief 5-minute call or quick walkthrough this week to see how this can generate more qualified inbound leads for {previewLead.business_name}?
              </p>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                <p className="font-semibold text-slate-200">Lucas | Alvora Tech</p>
                <p>Website: https://alvoratechhq.com &bull; Phone/SMS: +1 (412) 796-3968 &bull; Email: info@alvoratechhq.com</p>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setPreviewLead(null)}
                className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Add Lead */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-xl w-full max-w-md p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-sm font-bold text-white">Add US Outreach Prospect</h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-white p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddLead} className="space-y-3 text-xs">
              <div>
                <label className="block uppercase font-semibold text-slate-400 mb-1">Business Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lone Star Plumbing"
                  value={newLead.business_name}
                  onChange={(e) => setNewLead({ ...newLead, business_name: e.target.value })}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block uppercase font-semibold text-slate-400 mb-1">Contact Person</label>
                  <input
                    type="text"
                    placeholder="e.g. Mike Ross"
                    value={newLead.contact_name}
                    onChange={(e) => setNewLead({ ...newLead, contact_name: e.target.value })}
                    className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block uppercase font-semibold text-slate-400 mb-1">City, State</label>
                  <input
                    type="text"
                    placeholder="e.g. Dallas, TX"
                    value={newLead.city}
                    onChange={(e) => setNewLead({ ...newLead, city: e.target.value })}
                    className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block uppercase font-semibold text-slate-400 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. info@business.com"
                  value={newLead.email}
                  onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block uppercase font-semibold text-slate-400 mb-1">Industry</label>
                <select
                  value={newLead.niche}
                  onChange={(e) => {
                    const val = e.target.value;
                    setNewLead({
                      ...newLead,
                      niche: val,
                      demo_url: `https://alvoratechhq.com/${val}`
                    });
                  }}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500 capitalize"
                >
                  <option value="painting">Painting</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="plumbing-services">Plumbing</option>
                  <option value="auto-repair">Auto Repair</option>
                  <option value="contractor">Contractor</option>
                  <option value="dental-care">Dental</option>
                  <option value="personal-injury">Legal</option>
                  <option value="towing-company">Towing</option>
                  <option value="tree-removal">Tree Removal</option>
                  <option value="electrical">Electrical</option>
                  <option value="flooring">Flooring</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="locksmith">Locksmith</option>
                  <option value="pest-control">Pest Control</option>
                  <option value="pressure-demo">Pressure Washing</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold"
                >
                  Add to Queue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
