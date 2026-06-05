import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('doctor')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DoctorController {
  @Get('profile')
  @Roles(Role.DOCTOR)
  getProfile(@Request() req: any) {
    return {
      message: 'Welcome Doctor!',
      user: req.user,
    };
  }
}
