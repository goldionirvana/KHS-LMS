/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  User, 
  IdCard, 
  Briefcase, 
  Store, 
  GraduationCap, 
  Calendar, 
  UserCheck, 
  BookOpen, 
  ChevronRight,
  TrendingUp,
  Download,
  Search,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ArrowLeft,
  FileText,
  Stamp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Types
interface StudyMaterial {
  id: string;
  name: string;
  score: number;
  trainer: string;
  date: string;
  status: 'LULUS' | 'TIDAK LULUS' | 'REMIDIAL';
}

interface StudyProgram {
  id: string;
  name: string;
  executionPeriod: string;
  knowledgeTestScore: number;
  averageScore: number;
  amValidationScore: number;
  finalScore: number;
  status: 'LULUS' | 'TIDAK LULUS' | 'REMIDIAL';
  materials: StudyMaterial[];
}

interface EmployeeInfo {
  name: string;
  nik: string;
  position: string;
  storeLocation: string;
  region: string;
  averageTotalScore: number;
}

export default function App() {
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);

  // Mock Data aligned with user's examples
  const [employee] = useState<EmployeeInfo>({
    name: "Ahmad Rivaldi",
    nik: "PPA-2024-0891",
    position: "Crew Leader / Senior Cook",
    storeLocation: "Mi Gacoan - Malang Suhat",
    region: "Jawa Timur 1",
    averageTotalScore: 89.2
  });

  const [programs] = useState<StudyProgram[]>([
    {
      id: "prog-1",
      name: "TOS Mei 2026",
      executionPeriod: "Mei 2026",
      knowledgeTestScore: 88,
      averageScore: 92,
      amValidationScore: 95,
      finalScore: 91.6,
      status: "LULUS",
      materials: [
        { id: "m1", name: "Standard Operating Procedure Kitchen", score: 95, trainer: "Budi Santoso", date: "2026-05-10", status: "LULUS" },
        { id: "m2", name: "Food Safety & Hygiene", score: 89, trainer: "Siti Aminah", date: "2026-05-12", status: "LULUS" },
        { id: "m3", name: "Quality Control Standards", score: 92, trainer: "Budi Santoso", date: "2026-05-15", status: "LULUS" }
      ]
    },
    {
      id: "prog-2",
      name: "SOS Mei 2026",
      executionPeriod: "Mei 2026",
      knowledgeTestScore: 82,
      averageScore: 85,
      amValidationScore: 88,
      finalScore: 85.0,
      status: "LULUS",
      materials: [
        { id: "m4", name: "Customer Service Excellency", score: 82, trainer: "Dewi Lestari", date: "2026-05-18", status: "LULUS" },
        { id: "m5", name: "Complaint Handling", score: 88, trainer: "Rian Hidayat", date: "2026-05-20", status: "LULUS" }
      ]
    },
    {
      id: "prog-3",
      name: "MOS 2026",
      executionPeriod: "Semester 1 2026",
      knowledgeTestScore: 85,
      averageScore: 91,
      amValidationScore: 90,
      finalScore: 88.6,
      status: "LULUS",
      materials: [
        { id: "m6", name: "Store Management System", score: 94, trainer: "Budi Santoso", date: "2026-04-05", status: "LULUS" },
        { id: "m7", name: "Inventory Control", score: 88, trainer: "Hendra Wijaya", date: "2026-04-08", status: "LULUS" }
      ]
    }
  ]);

  const selectedProgram = programs.find(p => p.id === selectedProgramId);

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'LULUS': return 'text-green-600 bg-green-50 border-green-200';
      case 'TIDAK LULUS': return 'text-red-600 bg-red-50 border-red-200';
      case 'REMIDIAL': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 font-sans selection:bg-red-100 selection:text-red-900 pb-12 ${showCertificate ? 'certificate-mode' : ''}`}>
      {/* Brand Accent Bar */}
      <div className="h-2 w-full bg-red-600 sticky top-0 z-[60] no-certificate-print" />

      {/* Main Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-6 md:px-12 md:py-8 no-print no-certificate-print">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-2xl font-black text-slate-800 tracking-tighter">PT PESTA PORA ABADI</h1>
            <p className="text-xs font-bold text-red-600 tracking-widest uppercase mt-1">Learning & Development Division</p>
          </motion.div>
          
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <h2 className="text-lg font-bold text-slate-800 uppercase italic">Kartu Hasil Study</h2>
              <p className="text-sm text-slate-500">Employee Assessment Report</p>
            </div>
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200 shadow-sm">
              <GraduationCap className="text-slate-600 w-6 h-6" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-8 md:px-12 no-certificate-print">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Employee Profile Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
               <div className="p-8">
                 <div className="flex flex-col items-center text-center mb-8">
                    <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg shadow-slate-300 overflow-hidden bg-slate-50 mb-4">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${employee.name}`} alt="Profile" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">{employee.name}</h3>
                    <p className="text-sm font-semibold text-red-600 uppercase tracking-wider">{employee.position}</p>
                 </div>

                 <div className="space-y-4 pt-6 border-t border-slate-100">
                    <ProfileItem label="NIK Karyawan" value={employee.nik} />
                    <ProfileItem label="Store Penempatan" value={employee.storeLocation} />
                    <ProfileItem label="Regional" value={employee.region} />
                 </div>
               </div>
               
               <div className="bg-slate-900 p-8 text-white text-center relative overflow-hidden">
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Nilai Rata-rata Total</span>
                    <div className="flex items-center justify-center gap-1 mt-2">
                       <span className="text-5xl font-black italic tracking-tighter">{employee.averageTotalScore}</span>
                       <span className="text-xl opacity-40 font-bold">/100</span>
                    </div>
                    <div className="mt-4 px-4 py-1.5 bg-red-600 text-xs font-bold rounded-full inline-block shadow-lg shadow-red-900/50">
                      PREDIKAT: A- (Sangat Baik)
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl -mr-16 -mt-16" />
               </div>
            </div>
          </motion.div>

          {/* List/Detail Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8"
          >
            <AnimatePresence mode="wait">
              {!selectedProgramId ? (
                /* VIEW: Program List */
                <motion.div 
                  key="list"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden"
                >
                  <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Daftar Program Study</h3>
                      <p className="text-sm text-slate-400">Pilih program untuk melihat detail materi</p>
                    </div>
                    <button 
                      onClick={() => window.print()}
                      className="no-print p-2 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 shadow-sm cursor-pointer"
                      title="Print Report"
                    >
                      <Download className="w-4 h-4 text-slate-600" />
                    </button>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {programs.map((program) => (
                      <button 
                        key={program.id}
                        onClick={() => setSelectedProgramId(program.id)}
                        className="w-full text-left p-6 flex items-center justify-between hover:bg-slate-50 transition-all group cursor-pointer"
                      >
                        <div className="flex items-center gap-6">
                           <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center font-black group-hover:bg-red-600 group-hover:text-white transition-colors border border-red-100">
                             {program.name.substring(0, 1)}
                           </div>
                           <div>
                              <h4 className="font-bold text-slate-800 text-lg group-hover:text-red-600 transition-colors uppercase">{program.name}</h4>
                              <div className="flex items-center gap-3 mt-1">
                                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {program.executionPeriod}
                                </span>
                                <span className="text-[10px] uppercase font-bold text-slate-300">•</span>
                                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                                  <FileText className="w-3 h-3" />
                                  {program.materials.length} Materi
                                </span>
                              </div>
                           </div>
                        </div>
                        
                        <div className="flex items-center gap-8">
                           <div className="text-right flex flex-col items-end">
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 italic">Rata-rata</span>
                              <span className="text-xl font-black text-slate-900 group-hover:scale-110 transition-transform">{program.averageScore}</span>
                           </div>
                           <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="p-8 bg-slate-50/50 border-t border-slate-100 text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                      Laporan ini diterbitkan secara otomatis oleh sistem L&D Academy<br/>PT Pesta Pora Abadi
                    </p>
                  </div>
                </motion.div>
              ) : (
                /* VIEW: Material Detail */
                <motion.div 
                  key="detail"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden"
                >
                  <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                    <button 
                      onClick={() => setSelectedProgramId(null)}
                      className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest mb-6 hover:translate-x-[-4px] transition-transform no-print cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Kembali ke Dashboard
                    </button>
                    <div className="flex flex-wrap justify-between items-end gap-6">
                      <div>
                        <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">{selectedProgram?.name}</h3>
                        <p className="text-sm font-semibold text-slate-500 italic mt-1">Detail Hasil Evaluasi Materi Pembelajaran</p>
                        <button 
                          onClick={() => {
                            setShowCertificate(true);
                            setTimeout(() => {
                              window.print();
                              setShowCertificate(false);
                            }, 500);
                          }}
                          className="mt-4 flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-red-600 transition-colors cursor-pointer no-print"
                        >
                          <Download className="w-4 h-4" />
                          Download Sertifikat
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-6 md:gap-10 text-right">
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Knowledge Test</span>
                          <p className="text-4xl font-black text-slate-700 italic tracking-tighter">{selectedProgram?.knowledgeTestScore}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nilai Kelas</span>
                          <p className="text-4xl font-black text-slate-700 italic tracking-tighter">{selectedProgram?.averageScore}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Validasi Area Manager</span>
                          <p className="text-4xl font-black text-orange-500 italic tracking-tighter">{selectedProgram?.amValidationScore}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">Nilai Akhir</span>
                          <p className="text-5xl font-black text-red-600 italic tracking-tighter">{selectedProgram?.finalScore}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-100/50 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                          <th className="px-8 py-5 border-b border-slate-100">Materi Pembelajaran</th>
                          <th className="px-8 py-5 border-b border-slate-100">Trainer</th>
                          <th className="px-8 py-5 border-b border-slate-100 text-center">Tanggal</th>
                          <th className="px-8 py-5 border-b border-slate-100 text-center">Skor</th>
                          <th className="px-8 py-5 border-b border-slate-100 text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        {selectedProgram?.materials.map((material) => (
                          <tr key={material.id} className="hover:bg-slate-50 transition-colors group">
                            <td className="px-8 py-6 border-b border-slate-50">
                              <p className="font-bold text-slate-800 leading-snug">{material.name}</p>
                            </td>
                            <td className="px-8 py-6 border-b border-slate-50">
                              <span className="font-medium text-slate-600">{material.trainer}</span>
                            </td>
                            <td className="px-8 py-6 border-b border-slate-50 text-center">
                               <span className="text-slate-500 font-mono text-xs italic">{new Date(material.date).toLocaleDateString('id-ID')}</span>
                            </td>
                            <td className="px-8 py-6 border-b border-slate-50 text-center">
                              <span className="text-lg font-black text-slate-900 group-hover:text-red-600 transition-colors italic leading-none">{material.score}</span>
                            </td>
                            <td className="px-8 py-6 border-b border-slate-50 text-center">
                              <span className={`px-3 py-1 rounded text-[10px] font-black uppercase border ${getStatusStyles(material.status)}`}>
                                {material.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Print and Official Stamp Section (Visible on scroll/print) */}
                  <div className="p-12 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Dicetak Pada</span>
                      <p className="text-xs text-slate-600 mt-1">{new Date().toLocaleString('id-ID', { dateStyle: 'long', timeStyle: 'short' })} WIB</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-slate-50 border-2 border-dashed border-slate-200 rounded-full flex flex-col items-center justify-center text-slate-300 scale-75 md:scale-100">
                        <Stamp className="w-8 h-8 mb-1 opacity-40" />
                        <span className="text-[10px] font-bold uppercase tracking-tighter">STEMPEL DIVISI</span>
                      </div>
                      <p className="text-[10px] font-black text-slate-400 uppercase mt-4">Training Center Center</p>
                    </div>
                    <div className="text-right">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-12">Manager L&D Division</span>
                       <p className="text-sm font-bold text-slate-800 underline decoration-red-600 decoration-2 underline-offset-4 uppercase">Kartika Sari, S.Psi</p>
                       <span className="text-[10px] text-slate-500 font-bold">NIK: PPA-MGR-002</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-6 mt-12 md:px-12 text-center text-slate-300 text-[10px] font-bold uppercase tracking-[0.2em] no-print">
        PT PESTA PORA ABADI &bull; EXCELLENCE THROUGH TRAINING &bull; 2026
      </footer>

      {/* Decorative Blur Elements */}
      <div className="fixed bottom-[-100px] left-[-100px] w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-[-100px] right-[-100px] w-80 h-80 bg-orange-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Certificate Print View */}
      {showCertificate && selectedProgram && (
        <div className="certificate-print-only bg-white text-slate-900 p-12 border-[16px] border-double border-slate-100 relative">
          {/* Certificate Border Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-8 border-l-8 border-red-600" />
          <div className="absolute top-0 right-0 w-32 h-32 border-t-8 border-r-8 border-red-600" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-8 border-l-8 border-red-600" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-8 border-r-8 border-red-600" />

          <div className="text-center mb-12">
            <h1 className="text-4xl font-black tracking-tighter text-slate-900 mb-2">SERTIFIKAT KELULUSAN</h1>
            <p className="text-sm font-bold text-red-600 tracking-[0.3em] uppercase">PT PESTA PORA ABADI ACADEMY</p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-6" />
          </div>

          <div className="text-center mb-12">
            <p className="text-slate-500 italic text-sm mb-4">Diberikan kepada:</p>
            <h2 className="text-3xl font-bold text-slate-800 underline decoration-slate-200 decoration-4 underline-offset-8 uppercase mb-2">{employee.name}</h2>
            <p className="font-mono text-xs text-slate-400">NIK: {employee.nik} • {employee.position}</p>
          </div>

          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-slate-600 leading-relaxed">
              Telah dinyatakan <span className="font-bold text-red-600 uppercase italic">LULUS</span> dengan predikat "Sangat Baik" dalam mengikuti program pelatihan dan pengembangan operasional Mi Gacoan:
            </p>
            <h3 className="text-2xl font-black text-slate-900 mt-4 uppercase tracking-tight italic border-y-2 border-slate-100 py-3">{selectedProgram.name}</h3>
          </div>

          {/* Material Detail Table */}
          <div className="mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <th className="p-3 border border-slate-200 text-left">Materi Pembelajaran</th>
                  <th className="p-3 border border-slate-200">Trainer</th>
                  <th className="p-3 border border-slate-200 text-center">Nilai</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {selectedProgram.materials.map(m => (
                  <tr key={m.id}>
                    <td className="p-3 border border-slate-100 font-bold">{m.name}</td>
                    <td className="p-3 border border-slate-100 text-center">{m.trainer}</td>
                    <td className="p-3 border border-slate-100 text-center font-black italic">{m.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Performance Summary */}
          <div className="grid grid-cols-4 gap-6 mb-16">
            <ScoreStat label="Knowledge Test" value={selectedProgram.knowledgeTestScore} />
            <ScoreStat label="Nilai Kelas" value={selectedProgram.averageScore} />
            <ScoreStat label="Validasi AM" value={selectedProgram.amValidationScore} />
            <div className="bg-red-600 text-white p-4 rounded-xl text-center">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 block mb-1">Nilai Akhir</span>
              <span className="text-2xl font-black italic">{selectedProgram.finalScore}</span>
            </div>
          </div>

          {/* Signatures */}
          <div className="grid grid-cols-2 gap-20 items-end mt-20">
            <div className="text-center">
              <div className="w-32 h-32 bg-slate-50 border-2 border-dashed border-slate-200 rounded-full flex flex-col items-center justify-center font-black text-slate-300 mx-auto mb-4 grayscale">
                <Stamp className="w-10 h-10 mb-1 opacity-20" />
                <span className="text-[10px] tracking-tighter">STEMPEL RESMI</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Divisi Learning & Development</p>
            </div>
            <div className="text-center border-t-2 border-slate-900 pt-4">
              <p className="text-sm font-bold text-slate-800 uppercase italic">Kartika Sari, S.Psi</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Manager L&D Division</p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
             <p className="text-[9px] font-bold text-slate-300 tracking-[0.4em] uppercase">Authenticity Verified through L&D Academy System</p>
          </div>
        </div>
      )}
    </div>
  );
}

function ProfileItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</span>
      <span className="text-base font-bold text-slate-800 border-b border-slate-100 pb-1.5">{value}</span>
    </div>
  );
}

function ScoreStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{label}</span>
      <span className="text-2xl font-black text-slate-800 italic">{value}</span>
    </div>
  );
}
