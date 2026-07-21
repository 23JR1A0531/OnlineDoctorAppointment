/* ==========================================================================
   CareConnect - Application JavaScript (Indian Doctors & Rupee Data)
   ========================================================================== */

// 1. Doctor Data Array
const doctorsData = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    specialty: "General Physician",
    degree: "MBBS, MD (Internal Medicine)",
    hospital: "Apollo Hospitals, Hyderabad",
    rating: "4.9 (142 reviews)",
    experience: "14 yrs",
    fee: 500,
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 2,
    name: "Dr. Suresh Verma",
    specialty: "Cardiology",
    degree: "MBBS, DM (Cardiology)",
    hospital: "Fortis Healthcare, Mumbai",
    rating: "4.8 (115 reviews)",
    experience: "12 yrs",
    fee: 1000,
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 3,
    name: "Dr. Ananya Reddy",
    specialty: "Dermatology",
    degree: "MBBS, MD (Dermatology)",
    hospital: "Max Super Speciality, Delhi",
    rating: "4.9 (98 reviews)",
    experience: "9 yrs",
    fee: 700,
    avatar: "https://images.unsplash.com/photo-1594824813566-78a933f32f1f?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 4,
    name: "Dr. Priya Nair",
    specialty: "Pediatrics",
    degree: "MBBS, DCH (Pediatrics)",
    hospital: "Rainbow Children's Hospital, Bengaluru",
    rating: "4.9 (160 reviews)",
    experience: "10 yrs",
    fee: 600,
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 5,
    name: "Dr. Vikramaditya Rao",
    specialty: "Neurology",
    degree: "MBBS, DM (Neurology)",
    hospital: "Manipal Hospitals, Chennai",
    rating: "4.7 (88 reviews)",
    experience: "15 yrs",
    fee: 1200,
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 6,
    name: "Dr. Arjun Mehta",
    specialty: "Orthopedics",
    degree: "MBBS, MS (Orthopedics)",
    hospital: "Medanta - The Medicity, Gurgaon",
    rating: "4.8 (104 reviews)",
    experience: "11 yrs",
    fee: 850,
    avatar: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=300"
  }
];

// Available Time Slots
const timeSlots = ["09:00 AM", "10:30 AM", "11:15 AM", "02:00 PM", "04:30 PM", "06:00 PM"];

let selectedDoctor = null;
let selectedSlot = null;

// Initialize on Page Load
document.addEventListener("DOMContentLoaded", () => {
  const doctorListContainer = document.getElementById("doctor-list");
  if (doctorListContainer) {
    renderDoctorCards(doctorsData);
  }
});

// Render Doctor Cards
function renderDoctorCards(doctors) {
  const container = document.getElementById("doctor-list");
  if (!container) return;

  container.innerHTML = "";

  doctors.forEach((doc) => {
    const card = document.createElement("div");
    card.className = "card doc-card";
    card.innerHTML = `
      <div class="doc-header">
        <img class="doc-avatar" src="${doc.avatar}" alt="${doc.name}">
        <div class="doc-info">
          <h3>${doc.name}</h3>
          <span class="badge">${doc.specialty}</span>
        </div>
      </div>
      <div class="doc-meta">
        <span><i class="fas fa-graduation-cap"></i> ${doc.degree}</span>
        <span><i class="fas fa-hospital"></i> ${doc.hospital}</span>
        <span><i class="fas fa-briefcase"></i> Experience: ${doc.experience}</span>
        <span><i class="fas fa-star"></i> ${doc.rating}</span>
        <span class="doc-price">Consultation Fee: ₹${doc.fee}</span>
      </div>
      <button class="btn" onclick="openModal('${doc.name}', '${doc.specialty}')">
        <i class="fa-regular fa-calendar-check"></i> Book Appointment
      </button>
    `;
    container.appendChild(card);
  });
}

// Filter Doctors by Specialty Dropdown
function filterDoctors() {
  const filterVal = document.getElementById("specialty-filter").value;
  if (filterVal === "all") {
    renderDoctorCards(doctorsData);
  } else {
    const filtered = doctorsData.filter(
      (doc) => doc.specialty.toLowerCase() === filterVal.toLowerCase()
    );
    renderDoctorCards(filtered);
  }
}

// Open Booking Modal
function openModal(docName, docSpec) {
  selectedDoctor = docName;
  selectedSlot = null;

  document.getElementById("modal-doc-name").innerText = `Book with ${docName}`;
  document.getElementById("modal-doc-spec").innerText = `Specialty: ${docSpec}`;

  // Render Time Slots
  const slotsContainer = document.getElementById("slots-container");
  slotsContainer.innerHTML = "";

  timeSlots.forEach((slot) => {
    const slotBtn = document.createElement("button");
    slotBtn.className = "slot-btn";
    slotBtn.innerText = slot;
    slotBtn.onclick = () => selectSlot(slotBtn, slot);
    slotsContainer.appendChild(slotBtn);
  });

  const modal = document.getElementById("booking-modal");
  if (modal) modal.classList.add("active");
}

// Close Booking Modal
function closeModal() {
  const modal = document.getElementById("booking-modal");
  if (modal) modal.classList.remove("active");
}

// Select Slot Helper
function selectSlot(element, slot) {
  document.querySelectorAll(".slot-btn").forEach((btn) => btn.classList.remove("selected"));
  element.classList.add("selected");
  selectedSlot = slot;
}

// Confirm Booking Action
function confirmBooking() {
  if (!selectedSlot) {
    alert("Please select a time slot for your appointment.");
    return;
  }

  const consultType = document.getElementById("consult-type").value;
  alert(`Success! Appointment confirmed with ${selectedDoctor} for ${selectedSlot} (${consultType}).`);
  closeModal();
}

// Patient Dashboard Renderer
function renderPatientDashboard() {
  const tbody = document.getElementById("patient-appointments-list");
  if (!tbody) return;

  tbody.innerHTML = `
    <tr>
      <td>Dr. Rajesh Sharma</td>
      <td>General Physician</td>
      <td>Today, 10:30 AM</td>
      <td>In-Person</td>
      <td>₹500</td>
      <td><span class="badge badge-success">Confirmed</span></td>
      <td><button class="btn btn-secondary" onclick="alert('Appointment Cancelled')">Cancel</button></td>
    </tr>
    <tr>
      <td>Dr. Ananya Reddy</td>
      <td>Dermatology</td>
      <td>Tomorrow, 02:00 PM</td>
      <td>Video Call</td>
      <td>₹600</td>
      <td><span class="badge badge-success">Confirmed</span></td>
      <td><button class="btn btn-secondary" onclick="alert('Appointment Cancelled')">Cancel</button></td>
    </tr>
  `;
}

// Doctor Dashboard Renderer
function renderDoctorCards(doctors) {
  const container = document.getElementById("doctor-list");
  if (!container) return;

  container.innerHTML = "";

  doctors.forEach((doc) => {
    const card = document.createElement("div");
    card.className = "card doc-card";
    card.setAttribute("data-specialty", doc.specialty);
    card.innerHTML = `
      <div class="doc-header" style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
        <img class="doc-avatar" src="${doc.avatar}" alt="${doc.name}" style="width: 65px; height: 65px; border-radius: 50%; object-fit: cover;">
        <div class="doc-info">
          <h3 style="margin: 0; font-size: 1.1rem;">${doc.name}</h3>
          <span class="badge" style="display: inline-block; margin-top: 4px;">${doc.specialty}</span>
        </div>
      </div>
      <div class="doc-meta" style="display: flex; flex-direction: column; gap: 6px; font-size: 0.9rem; margin-bottom: 15px;">
        <span><i class="fas fa-graduation-cap"></i> ${doc.degree}</span>
        <span><i class="fas fa-hospital"></i> ${doc.hospital}</span>
        <span><i class="fas fa-star" style="color: #f39c12;"></i> ${doc.rating}</span>
        <span class="doc-price" style="font-weight: bold; color: #008080;">Consultation: ₹${doc.fee}</span>
      </div>
      <button class="btn" style="width: 100%;" onclick="openModal('${doc.name}', '${doc.specialty}')">Book Appointment</button>
    `;
    container.appendChild(card);
  });
}