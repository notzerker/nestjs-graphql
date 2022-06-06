import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TokensService } from './tokens.service';
import { CreateTokenInput } from './dto/create-token.input';
import { UpdateTokenInput } from './dto/update-token.input';

@Resolver('Token')
export class TokensResolver {
  constructor(private readonly tokensService: TokensService) {}

  @Mutation('createToken')
  create(@Args('createTokenInput') createTokenInput: CreateTokenInput) {
    return this.tokensService.create(createTokenInput);
  }

  @Query('tokens')
  findAll() {
    return this.tokensService.findAll();
  }

  @Query('token')
  findOne(@Args('id') id: number) {
    return this.tokensService.findOne(id);
  }

  @Mutation('updateToken')
  update(@Args('updateTokenInput') updateTokenInput: UpdateTokenInput) {
    return this.tokensService.update(updateTokenInput.id, updateTokenInput);
  }

  @Mutation('removeToken')
  remove(@Args('id') id: number) {
    return this.tokensService.remove(id);
  }
}
