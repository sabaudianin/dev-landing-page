## LIVE DEMO :

### https://dev-landing-page-murex.vercel.app/

# Modern Contact System (Next.js + TypeScript + Redis)

Profesjonalny, bezpieczny i wysoko wydajny system obsługi zapytań kontaktowych, zbudowany w oparciu o architekturę Serverless. Projekt kładzie nacisk na bezpieczeństwo danych, ochronę przed spamem oraz optymalizację wydajnościową (Lighthouse 100/100).

## 🚀 Główne Funkcjonalności

- **Shared Schema Validation**: Wykorzystanie biblioteki **Zod** do stworzenia wspólnego schematu walidacji używanego zarówno po stronie klienta (UX), jak i serwera (bezpieczeństwo).
- **Rate Limiting**: Zaawansowana ochrona przed nadużyciami API z wykorzystaniem **Upstash Redis** (algorytm Sliding Window).
- **Multi-layered Spam Protection**:
  - **Honeypot**: Ukryte pole techniczne neutralizujące boty.
  - **Server-side Validation**: Odporność na próby obejścia formularza przez narzędzia typu Postman.
- **Modern Form Handling**: Rezygnacja z ciężkich stanów `useState` na rzecz natywnego API `FormData`, co minimalizuje liczbę re-renderów komponentu.
- **Transactional Emails**: Integracja z **Resend** zapewniająca błyskawiczne dostarczanie wiadomości z responsywnym szablonem HTML.
- **WhatsApp Integration**: Funkcja generowania bezpośrednich linków do rozmowy (click-to-chat) na podstawie numeru telefonu nadawcy.

## Stack Techniczny

- **Framework**: Next.js (App Router)
- **Język**: TypeScript (Strict Mode)
- **Baza danych (Edge)**: Upstash Redis
- **Walidacja**: Zod
- **E-mail Service**: Resend API
- **Animacje**: Framer Motion
- **Stylizacja**: Tailwind CSS
- **Ikony**: Lucide React

## Architektura Systemu

### Walidacja Danych (Zod)

Zastosowałem podejście _Single Source of Truth_. Schemat zdefiniowany w `lib/contact-schema.ts` wymusza spójność typów w całym projekcie.
