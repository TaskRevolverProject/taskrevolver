import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../services/team/team.service';
import { Team } from '../../../models/team/team.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { element } from 'protractor';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-teams-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})
export class TeamlistComponent implements OnInit {
  teamlist: Team[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    const x = this.teamService.getData();
    x.snapshotChanges().subscribe(item => {
      this.teamlist = [];
      item.forEach(listelement => {
        const y = listelement.payload.toJSON();
        y['$key'] = listelement.key;
        this.teamlist.push(y as Team);
      });
    });
  }

  onItemClick(clickedteam: Team) {
    this.teamService.selectedTeam = Object.assign({}, clickedteam);
  }

}

