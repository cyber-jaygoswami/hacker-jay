import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

export default function CertificateModal({ cert, isOpen, onClose }) {
  if (!isOpen || !cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded bg-[#FAF7F1] border border-[#111111] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#EFE7DC] px-6 py-4 border-b border-[#D8D0C6] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-[#8A847C] uppercase tracking-widest block">
              OFFICIAL CREDENTIAL RECORD // VERIFIED
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111111]">
              {cert.title}
            </h3>
          </div>
          
          <button
            onClick={onClose}
            className="p-1 rounded text-[#5F5A54] hover:text-[#111111] hover:bg-[#D8D0C6]/50 transition-colors"
            aria-label="Close certificate modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Certificate Image Preview */}
          {cert.image && (
            <div className="rounded border border-[#D8D0C6] bg-white p-2 shadow-sm">
              <img
                src={cert.image}
                alt={`${cert.title} Official Document`}
                className="w-full h-auto object-contain rounded max-h-96 mx-auto"
                loading="lazy"
              />
            </div>
          )}

          {/* Credential Data Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded border border-[#D8D0C6] bg-[#F7F1E8]">
              <span className="text-[#8A847C] text-[10px] block uppercase tracking-wider">ISSUING BODY</span>
              <span className="text-[#111111] font-semibold">{cert.issuer}</span>
            </div>
            
            <div className="p-3 rounded border border-[#D8D0C6] bg-[#F7F1E8]">
              <span className="text-[#8A847C] text-[10px] block uppercase tracking-wider">DATE AWARDED</span>
              <span className="text-[#111111] font-semibold">{cert.issueDate}</span>
            </div>

            <div className="p-3 rounded border border-[#D8D0C6] bg-[#F7F1E8] sm:col-span-2">
              <span className="text-[#8A847C] text-[10px] block uppercase tracking-wider">OFFICIAL CREDENTIAL ID</span>
              <span className="text-[#111111] font-bold text-sm tracking-wider">{cert.credentialId}</span>
            </div>
          </div>

          {/* Practical Assessment Domains */}
          {cert.domains && (
            <div className="space-y-2 pt-2 border-t border-[#D8D0C6]">
              <h4 className="text-[11px] font-mono text-[#8A847C] uppercase tracking-wider">
                VERIFIED ASSESSMENT DOMAINS
              </h4>
              <ul className="space-y-1.5 text-xs text-[#5F5A54] font-sans">
                {cert.domains.map((dom, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-[#111111] font-mono">&bull;</span>
                    <span>{dom}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Actions */}
        <div className="bg-[#EFE7DC] px-6 py-4 border-t border-[#D8D0C6] flex items-center justify-between">
          {cert.pdf ? (
            <a
              href={cert.pdf}
              download={`${cert.id}-certificate.pdf`}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded text-xs font-mono bg-[#111111] text-[#F7F1E8] font-medium hover:bg-[#333333] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD OFFICIAL PDF</span>
            </a>
          ) : (
            <span className="text-xs font-mono text-[#5F5A54]">Official Document Verified</span>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded text-xs font-mono border border-[#D8D0C6] text-[#111111] hover:bg-[#FAF7F1] transition-colors"
          >
            CLOSE
          </button>
        </div>

      </div>
    </div>
  );
}
