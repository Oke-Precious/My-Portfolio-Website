import { jsPDF } from 'jspdf';
import { cvData } from '../data/cvData.js';

export function getGoogleDocsExportUrl(docUrl) {
  if (!docUrl) return null;
  const match = docUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://docs.google.com/document/d/${match[1]}/export?format=pdf`;
  }
  return null;
}

export function generateCVPdf() {
  const doc = new jsPDF({
    unit: 'pt',
    format: 'letter', // 612 x 792 pt
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;
  let y = 45;

  // Header - Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42); // #0F172A
  doc.text(cvData.name.toUpperCase(), margin, y);
  y += 18;

  // Title / Profession
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(13, 148, 136); // #0D9488 Teal
  doc.text(cvData.title, margin, y);
  y += 15;

  // Contact Row
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105); // #475569
  const contactText = `${cvData.location}  |  ${cvData.email}  |  ${cvData.phone}  |  ${cvData.githubHandle}`;
  doc.text(contactText, margin, y);
  y += 10;

  // Helper for section headers
  const addSectionHeader = (title) => {
    y += 10;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text(title.toUpperCase(), margin, y);
    y += 4;
    doc.setDrawColor(203, 213, 225); // #CBD5E1
    doc.setLineWidth(0.8);
    doc.line(margin, y, margin + contentWidth, y);
    y += 12;
  };

  // Section 1: Professional Summary
  addSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  const summaryLines = doc.splitTextToSize(cvData.summary, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 11 + 2;

  // Section 2: Technical Skills
  addSectionHeader('Technical Skills');
  cvData.technicalSkills.forEach((item) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(15, 23, 42);
    const catText = `${item.category}: `;
    doc.text(catText, margin, y);
    const catWidth = doc.getTextWidth(catText);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const skillLines = doc.splitTextToSize(item.skills, contentWidth - catWidth);
    doc.text(skillLines, margin + catWidth, y);
    y += skillLines.length * 10.5 + 2;
  });

  // Section 3: Selected Technical Projects
  addSectionHeader('Selected Technical Projects');
  cvData.projects.forEach((proj) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(proj.title, margin, y);

    const titleWidth = doc.getTextWidth(proj.title);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(`  |  ${proj.stack}`, margin + titleWidth, y);
    y += 11;

    proj.points.forEach((point) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      doc.text('•', margin + 6, y);
      const pointLines = doc.splitTextToSize(point, contentWidth - 18);
      doc.text(pointLines, margin + 18, y);
      y += pointLines.length * 10.5 + 1.5;
    });
    y += 4;
  });

  // Section 4: Education
  addSectionHeader('Education');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(cvData.education.institution, margin, y);
  y += 11;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(51, 65, 85);
  doc.text(`${cvData.education.degree}  |  ${cvData.education.status}`, margin, y);
  y += 11;

  const courseLines = doc.splitTextToSize(
    `Relevant coursework: ${cvData.education.coursework}`,
    contentWidth
  );
  doc.text(courseLines, margin, y);

  doc.save('Oke_Precious_Abioye_CV.pdf');
}
