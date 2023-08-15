import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PlayerController } from './controllers/player.controller';
import { auth } from './middlewares/auth-middleware';

@Module({
  imports: [],
  providers: [],
  controllers: [PlayerController],
  exports: [],
})
export class PlayerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(auth).forRoutes('player');

    // consumer.apply(auth).forRoutes(PlayerController);
    // consumer.apply(auth).forRoutes('player','team', {path:"/player/rohit" method:RequestMethod.POST});

    // consumer
    //   .apply(auth)
    //   .exclude({ path: 'player/sachin', method: RequestMethod.POST })
    //   .forRoutes(PlayerController);
  }
}
