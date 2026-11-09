# Retrospective – Sprint 2: Susu Horizon Travel

**Student:** Mohammed Hassan Mohamed  
**Studentnummer:** 97112414

### Wat ging goed?

Ik heb met HTML, CSS en JavaScript een reiswebsite gemaakt waarop je bestemmingen en hotels kunt bekijken. Op de hotelpagina heb ik een zoekfunctie gemaakt waarmee je een incheckdatum en uitcheckdatum kunt kiezen. Als een nacht al geboekt is, toont de website de melding **Fully Booked**.

### Wat ging minder goed?

Tijdens het testen werkte de beschikbaarheidscontrole eerst alleen bij de hotels in Dubai. Ik moest uitzoeken waarom andere hotels werden overgeslagen. De naam op de hotelkaart moet precies overeenkomen met de naam in mijn JavaScript-lijst. Ook kwam ik een typefout tegen: `vieuwButton` in plaats van `viewButton`. Daardoor kon de controle stoppen voordat alle hotelkaarten waren gecontroleerd.

### Wat heb ik geleerd?

Ik heb geleerd hoe ik met JavaScript alle hotelkaarten één voor één kan controleren. Ik begrijp nu beter hoe ik de naam uit HTML aan de juiste hotelgegevens koppel. Ik heb ook geleerd waarom de uitcheckdatum niet meetelt: op die dag vertrek je en slaap je niet meer in het hotel.

### Wat doe ik de volgende keer anders?

Ik ga elke bestemming apart testen zodra ik die toevoeg. Ik test dan drie situaties: beschikbare nachten, een geboekte nacht en ongeldige datums. Als iets niet werkt, kijk ik meteen in de browserconsole om te zien op welke regel de fout zit.