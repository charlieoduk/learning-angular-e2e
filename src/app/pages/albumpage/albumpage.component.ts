import { Component, OnInit } from '@angular/core';
import { Image } from '../../image';

@Component({
  selector: 'app-albumpage',
  templateUrl: './albumpage.component.html',
  styleUrls: ['./albumpage.component.css']
})
export class AlbumpageComponent {
  modal = false;
  currentUrl: string;
  currentCaption: string;
  currentDetails: string;

  planes: Image[] = [
    {
      imageUrl: '../../../assets/img/e190.jpg',
      caption: 'Embraer 190',
      // tslint:disable-next-line:max-line-length
      details: 'The Embraer E-Jet family is a series of narrow-body medium-range twin-engine jet airliners, carrying 66 to 124 passengers commercially, manufactured by Brazilian aerospace manufacturer Embraer. The aircraft family was first introduced at the Paris Air Show in 1999 and entered production in 2002. The series has been a commercial success primarily due to its ability to efficiently serve lower-demand routes while offering many of the same amenities and features of larger jets. The aircraft is used by mainline and regional airlines around the world but has proven particularly popular with regional airlines in the United States. The 1,400th E-Jet, an E175, was delivered on 6 December 2017; it had a backlog of over 150 firm orders on 30 September 2017.'
    },
    {
      imageUrl: '../../../assets/img/a380--.jpg',
      caption: 'AirBus A380',
      // tslint:disable-next-line:max-line-length
      details: 'The Airbus A380 is a double-deck, wide-body, four-engine jet airliner manufactured by European manufacturer Airbus.[6][7] It is the world\'s largest passenger airliner, and the airports at which it operates have upgraded facilities to accommodate it.It was initially named Airbus A3XX and designed to challenge Boeing\'s monopoly in the large-aircraft market. The A380 made its first flight on 27 April 2005 and entered commercial service on 25 October 2007 with Singapore Airlines. An improved version, the A380plus, is under development.'
    },
    {
      imageUrl: '../../../assets/img/concorde.jpg',
      caption: 'concorde',
      // tslint:disable-next-line:max-line-length
      details: 'Aérospatiale/BAC Concorde (/ˈkɒnkɔːrd/) is a British-French turbojet-powered supersonic passenger jet airliner that was operated until 2003. It had a maximum speed over twice the speed of sound at Mach 2.04 (1,354 mph or 2,180 km/h at cruise altitude), with seating for 92 to 128 passengers. First flown in 1969, Concorde entered service in 1976 and continued flying for the next 27 years. It is one of only two supersonic transports to have been operated commercially; the other is the Soviet-built Tupolev Tu-144, which operated in passenger service from 1977[6] to 1978.'
    },
    {
      imageUrl: '../../../assets/img/f16.jpg',
      caption: 'F-16',
      // tslint:disable-next-line:max-line-length
      details: 'The General Dynamics F-16 Fighting Falcon is a single-engine supersonic multirole fighter aircraft originally developed by General Dynamics (now Lockheed Martin) for the United States Air Force (USAF). Designed as an air superiority day fighter, it evolved into a successful all-weather multirole aircraft. Over 4,500 aircraft have been built since production was approved in 1976.[4] Although no longer being purchased by the U.S. Air Force, improved versions are still being built for export customers.[5] In 1993, General Dynamics sold its aircraft manufacturing business to the Lockheed Corporation,[6] which in turn became part of Lockheed Martin after a 1995 merger with Martin Marietta'
    },
    {
      imageUrl: '../../../assets/img/737.jpg',
      caption: 'Boeing 737',
      // tslint:disable-next-line:max-line-length
      details: 'The Boeing 737 is a short- to medium-range twinjet narrow-body airliner developed and manufactured by Boeing Commercial Airplanes in the United States. Originally developed as a shorter, lower-cost twin-engine airliner derived from the 707 and 727, the 737 has developed into a family of ten passenger models with capacities from 85 to 215 passengers. The 737 is Boeing\'s only narrow-body airliner in production, with the 737 Next Generation(- 700, -800, and - 900ER) and the re - engined and redesigned 737 MAX variants currently being built.'
    },
    {
      imageUrl: '../../../assets/img/a320.jpg',
      caption: 'AirBus A320',
      // tslint:disable-next-line:max-line-length
      details: 'The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners manufactured by Airbus. The family includes the A318, A319, A320 and A321, as well as the ACJ business jet. The A320s are also named A320ceo (current engine option) after the introduction of the A320neo (new engine option).[5] Final assembly of the family takes place in Toulouse, France, and Hamburg, Germany. A plant in Tianjin, China, has also been producing aircraft for Chinese airlines since 2009,[6] while a final assembly facility in Mobile, Alabama, United States, delivered its first A321 in April 2016.[7] The aircraft family can accommodate up to 236 passengers and has a range of 3,100 to 12,000 km (1,700 to 6,500 nmi), depending on model.'
    },
  ]

  showModal(plane: any) {
    this.modal = !this.modal;
    this.currentUrl = plane.imageUrl;
    this.currentCaption = plane.caption;
    this.currentDetails = plane.details;
  }

}
