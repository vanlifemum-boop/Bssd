# BSSD – Website

Statische Website für **BSSD – Beratung & Schulungen & Sport & Dienstleistungen** (Gregor Nebel).
Veröffentlichung: Jeder Push auf `main` baut die Seiten und stellt sie über GitHub Pages bereit (`.github/workflows/pages.yml`).

## Aufbau – jede Säule hat ihr eigenes Verzeichnis

| Pfad | Inhalt |
|---|---|
| `index.html` | Startseite: die drei Säulen, Einzel-AAT®, Zielgruppen |
| `beratung/` | **Säule 01** – Systemische Familien-, Krisen- & Mobbingberatung, B2B, Zertifikate |
| `sport/` | **Säule 02** – Personal Training (Boxen, Kickboxen, Kraft, Mobilität, funktionell), Ernährung |
| `schulungen/` | **Säule 03** – Sicherheit, Gewaltschutz, Deeskalation, Gesprächsführung |
| `anti-gewalt-training/` | Einzel-AAT® (Inhalte aus dem Flyer) |
| `ueber-mich/`, `kontakt/`, `impressum/`, `datenschutz/` | Weitere Seiten |
| `assets/` | Gemeinsames CSS, JS, Favicon |

Die Startseite verbindet eine große typografische Hero-Sektion mit einer lokalen
SVG-Grafik der drei Säulen, Angebotskarten, einem Profilbereich, Einzel-AAT® und
einer aufklappbaren Orientierungshilfe. Die Gestaltung nutzt Petrol, Salbei,
warme Naturtöne und Systemschriftarten ohne externe Schriftanbieter.
Alle Unterseiten verwenden dieselbe responsive Navigation und Gestaltung.
Über die Säulenleiste wechselt man direkt zwischen Beratung, Sport und Schulungen.

## Bearbeiten

Die Texte stehen in `_inhalt/*.html`. Kopf, Säulenleiste und Fußbereich ergänzt das Skript:

```bash
python3 _bauen.py
```

Telefon, E-Mail und Ort einmal oben in `_bauen.py` (`STAMM`) eintragen und neu bauen.
Dann werden die Kontaktangaben auf allen Seiten übernommen und Telefon/E-Mail
direkt verlinkt. Solange keine E-Mail-Adresse hinterlegt ist, bleibt das Formular
deaktiviert und zeigt einen klaren Hinweis. Mit hinterlegter Adresse und aktivem
JavaScript öffnet „E-Mail vorbereiten“ das lokale E-Mail-Programm; die Website
versendet und speichert keine Nachrichten. Ohne JavaScript bleiben alle
Navigationslinks und die Orientierungshilfe zugänglich.

## Vor dem Livegang noch offen

- [ ] Telefon, E-Mail, Ort (`STAMM` in `_bauen.py`)
- [ ] Impressum: Anschrift, USt-Angabe, Markenhinweis AAT®
- [ ] Datenschutz: Hosting-Anbieter eintragen, rechtlich prüfen lassen
- [ ] Über mich: Abschluss Pädagogik/Soziale Arbeit, Sport-Lizenzen
- [ ] Optional: echtes Porträtfoto ergänzen; aktuell wird ein typografisches Monogramm verwendet
