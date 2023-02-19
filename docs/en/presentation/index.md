---
layout: Slide
---

@slidestart

## Find Mr. X

Play Mr. X with your friends in your city!

---

## Gliederung

- Idee der App
- Demo
- Aufbau
- Funktionsweise
- Code/Test 

---

## Idee der App

<p><img src="https://cdn.ravensburger.de/images/produktseiten/360/26602_3.webp" alt="test" height="400" ></p>

--

<p><img src="https://cloud.friedrichvoelkers.de/public/projects/find-mr-x/img07.jpg" alt="test" height="500" ></p>

---


## Funktionsweise

- Beim Erstellen eines Spiels bzw. dem Beitreten werden die Daten lokal und in der Firebase Datenbank gespeichert
- Wenn andere Spieler Daten (Benutzernamen, Standort etc.) hochladen, werden die Daten heruntergeladen und lokal gespeichert

--

- Für die Überprüfung, ob Mr. X in der Nähe ist, wird nach allen verfügbaren Bluetooth Geräten gesucht und mit Mr. X verglichen
- Für die Karte wird das Mapbox Android SDK verwendet

@slideend
