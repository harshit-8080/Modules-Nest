import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { RecentTeam } from '../interceptors/recentTeam-interceptors';

@Controller('/player')
export class PlayerController {
  @Get('name')
  getPlayersByName() {
    return {
      message: 'Players Name are available',
    };
  }

  @Get('team')
  @UseInterceptors(RecentTeam)
  getTeam() {
    if (false) {
      throw new Error('Not implemented');
    }
    return {
      message: 'Team Returned',
    };
  }
}
