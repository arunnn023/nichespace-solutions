// utils/createOfficeMap.js
export function createOfficeMap() {
  const officeMap = new Map();
  officeMap.set('title', 'Office Location');
  officeMap.set(
    'address',
    'KBHP 6TH-Phase, Venkata Sai Residency, Plot No: 104, HIG-339, Hyderabad, Telangana 500085'
  );
  officeMap.set(
    'mapUrl',
    'https://www.google.com/maps/place/Venkata+Sai+residency/@17.4861716,78.3869593,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb91c5d3a77e85:0x69d2ebcbca792466!8m2!3d17.4861716!4d78.3895342!16s%2Fg%2F11fmphnwl3?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D'
  );
  return officeMap;
}
