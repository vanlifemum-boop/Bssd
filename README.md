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
Beratungsillustration, bebilderten Angebotskarten, einem Profilbereich, Einzel-AAT® und
einer aufklappbaren Orientierungshilfe. Die Gestaltung nutzt Petrol, Salbei,
warme Naturtöne und Systemschriftarten ohne externe Schriftanbieter.
Alle Unterseiten verwenden dieselbe responsive Navigation und Gestaltung.
Über die Säulenleiste wechselt man direkt zwischen Beratung, Sport und Schulungen.
Die lokalen SVG-Illustrationen zeigen Familienberatung, angeleitetes Pratzentraining,
einen Workshop und ein Einzelgespräch im AAT. Bildunterschriften erläutern den Bezug
zum Angebot; die Figuren sind Illustrationen und keine Porträts realer Personen.

## Bearbeiten

Die Texte stehen in `_inhalt/*.html`. Kopf, Säulenleiste und Fußbereich ergänzt das Skript:

```bash
python3 _bauen.py
```

Kontaktangaben werden oben in `_bauen.py` (`STAMM`) gepflegt und beim Build auf
allen Seiten übernommen. E-Mail für sämtliche Anfragen: **info@bbsd-abi.de**.
WhatsApp und Telegram sind für **schriftlichen Kontakt unter 0176 41504753**
verlinkt; die internationale Nummer lautet **+4917641504753**.
Die Nummer wird nicht als telefonische Erreichbarkeit beworben.
Solange keine E-Mail-Adresse hinterlegt ist, bleibt das Formular
deaktiviert und zeigt einen klaren Hinweis. Mit hinterlegter Adresse und aktivem
JavaScript öffnet „E-Mail vorbereiten“ das lokale E-Mail-Programm; die Website
versendet und speichert keine Nachrichten. Ohne JavaScript bleiben alle
Navigationslinks und die Orientierungshilfe zugänglich.

## Vor dem Livegang noch offen

- [x] E-Mail, WhatsApp und Telegram (`STAMM` in `_bauen.py`)
- [x] Biografie und fachliches Profil nach den Angaben von Gregor Nebel ergänzt
- [ ] Ort / Einsatzgebiet ergänzen, falls gewünscht
- [ ] Impressum: Anschrift, USt-Angabe, Markenhinweis AAT®
- [ ] Datenschutz: Hosting-Anbieter eintragen, rechtlich prüfen lassen
- [ ] Über mich: Abschluss Pädagogik/Soziale Arbeit, Sport-Lizenzen
- [ ] Optional: echtes Porträtfoto ergänzen; aktuell wird ein typografisches Monogramm verwendet
