
# Beschreibung der App

Im Rahmen des Kurses *Mobile Betriebssysteme und Netzwerke* ist eine App
entstanden, welche das Brettspiel Scotland Yard (oder auch bekannt als
Mister X) in die reale Welt holt. Mit der App ist es möglich in einer
Gruppe eine Art digitales Verstecken in der realen Welt zu spielen. Der
Clou des Spiels ist es, dass eine Person von den anderen Spieler\*innen
gefunden werden muss und der Standort dieser Person nur alle 5 Minuten
(Zeitraum kann selbst festgelegt werden) geteilt wird. Die Standorte der
anderen Spieler\*innen wird in Echtzeit übertragen und auf der Karte
dargestellt. Die Standorte aller Personen werden über eine Firebase
Realtime Database ausgetauscht. Zur Visualisierung der Karte wird das
Mapbox Android SDK verwendet. Sollte die gesuchte Person innerhalb der
Spielzeit (Zeitraum kann selbst festgelegt werden) gefunden werden,
haben die Sucher\*innen gewonnen und die zu suchende Person verloren.
Damit verifiziert werden kann, ob die gesuchte Person wirklich gefunden
wurde, wird versucht eine Bluetooth-Verbindung zwischen den Geräten
herzustellen.

<!-- ---

::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::

---

::: echarts A bar chart

```json
{
  "xAxis": {
    "type": "category",
    "data": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  "yAxis": {
    "type": "value"
  },
  "series": [
    {
      "data": [120, 200, 150, 80, 70, 110, 130],
      "type": "bar",
      "showBackground": true,
      "backgroundStyle": {
        "color": "rgba(180, 180, 180, 0.2)"
      }
    }
  ]
}
```

:::

---

::: echarts A nightingale chart

```json
{
  "legend": {
    "top": "bottom"
  },
  "toolbox": {
    "show": true,
    "feature": {
      "mark": {
        "show": true
      },
      "dataView": {
        "show": true,
        "readOnly": false
      },
      "restore": {
        "show": true
      },
      "saveAsImage": {
        "show": true
      }
    }
  },
  "series": [
    {
      "name": "Nightingale Chart",
      "type": "pie",
      "radius": "65%",
      "center": ["50%", "50%"],
      "itemStyle": {
        "borderRadius": 0
      },
      "data": [
        {
          "value": 40,
          "name": "rose 1"
        },
        {
          "value": 38,
          "name": "rose 2"
        },
        {
          "value": 32,
          "name": "rose 3"
        },
        {
          "value": 30,
          "name": "rose 4"
        },
        {
          "value": 28,
          "name": "rose 5"
        },
        {
          "value": 26,
          "name": "rose 6"
        },
        {
          "value": 22,
          "name": "rose 7"
        },
        {
          "value": 18,
          "name": "rose 8"
        }
      ]
    }
  ]
}
```

:::

---

::: echarts A scatter chart

```json
{
  "xAxis": {},
  "yAxis": {},
  "series": [
    {
      "symbolSize": 20,
      "data": [
        [10.0, 8.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [10.0, 6.33],
        [14.0, 8.96],
        [12.5, 6.82],
        [9.15, 7.2],
        [11.5, 7.2],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12.0, 6.26],
        [12.0, 8.84],
        [7.08, 5.82],
        [5.02, 5.68]
      ],
      "type": "scatter"
    }
  ]
}
```

:::

---

::: echarts A scatter chart

```json
{
    "title": {
        "text": "Basic Radar Chart"
  },
  "legend": {
    "data": ["Allocated Budget", "Actual Spending"]
  },
  "radar": {
    "shape": "circle",
    "indicator": [
      { "name": "Sales", "max": 6500 },
      { "name": "Administration", "max": 16000 },
      { "name": "Information Technology", "max": 30000},
      { "name": "Customer Support", "max": 38000},
      { "name": "Development", "max": 52000 },
      { "name": "Marketing", "max": 25000 }
    ]
  },
  "series": [
    {
      "name": "Budget vs spending",
      "type": "radar",
      "data": [
        {
          "value": [4200, 3000, 20000, 35000, 50000, 18000],
          "name": "Allocated Budget"
        },
        {
          "value": [5000, 14000, 28000, 26000, 42000, 21000],
          "name": "Actual Spending"
        }
      ]
    }
  ]
}
``` -->
