import {
  Controller,
  DefaultValuePipe,
  Get,
  Post,
  Param,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseEnumPipe,
  ParseFloatPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  Body,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import {
  CreateAdminDTO,
  CreateEmployeeDTO,
  SearchDataDTO,
} from './app.createAdmin.dto';
import { JoiValidationPipe } from './joi.validation.pipe';
import { createAdminSchema } from './app.createAdmin.scehma';

@Controller('/app')
export class AppController {
  @Get('number/:id')
  getNumber(@Param('id', ParseIntPipe) id: number) {
    return {
      type: typeof id,
    };
  }

  // @UsePipes(new JoiValidationPipe(createAdminSchema))
  @Post('/admin')
  createAdmin(
    @Body(new JoiValidationPipe(createAdminSchema)) body: CreateAdminDTO,
  ) {
    console.log(body);
    return {
      message: body,
    };
  }

  // Doing JSON Validation using class-validator and class-transformer
  @Post('/employee')
  createEmployee(@Body(ValidationPipe) body: CreateEmployeeDTO) {
    console.log(body);
    return {
      message: body,
    };
  }

  @Get('/employee/search')
  searchEmployee(@Query(ValidationPipe) searchData: SearchDataDTO) {
    console.log(searchData);
    return {
      message: searchData,
    };
  }

  @Get('/employee/:employeeId')
  getEmployee(@Param('employeeId', ParseIntPipe) employeeId: number) {
    console.log(employeeId);
    return {
      message: 'Validated Successfully',
    };
  }

  /*

    ParseBoolPipe;
    ParseEnumPipe()
    new ParseArrayPipe({ items: Number, seprator: ","});  Need to Package class-validator and clas-transformer
    ParseBoolPipe;
    ParseFloatPipe;
    ParseUUIDPipe;

    new DefaultValuePipe(10)


    custom pipe -->
    
      1. make a class
      2. implements PipeTransform.
      3. overide a function called as transform(value, metadata){}

    
    We can also make pipe globally available  
  
  */
}
