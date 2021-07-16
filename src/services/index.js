const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

export const BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/vacations`;
export const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` };
export const SORT_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/tbl1RyQb8dMtkd2lE?sort%5B0%5D%5Bfield%5D=season&sort%5B0%5D%5Bdirection%5D=desc`
export const TOP_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/tbl1RyQb8dMtkd2lE?filterByFormula=%7Brating%7D+%3D+5`