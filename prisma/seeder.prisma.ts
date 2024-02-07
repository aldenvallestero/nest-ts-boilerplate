import { PrismaClient } from '@prisma/client';

class Seeder {
  model: PrismaClient;
  user: any;
  post: any;

  constructor() {
    this.model = new PrismaClient();
    this.user = null;
    this.post = null;
  }

  async #seedUser() {
    const user = this.model.user.create({
      data: {
        email: 'example@email.com',
        name: 'Juan Dela Cruz',
        address: 'Luzon, Philippines',
      },
    });
    this.user = user;
  }

  async #seedPost() {
    const post = await this.model.post.create({
      data: {
        title: 'Top 10 Richest Countries',
        body: 'Not gonna tell you',
        author: {
          connect: {
            id: this.user.id,
          },
        },
      },
    });
    this.post = post;
  }

  async seedAll() {
    await this.#seedUser();
    await this.#seedPost();
  }
}

const seeder = new Seeder();

seeder.seedAll();
