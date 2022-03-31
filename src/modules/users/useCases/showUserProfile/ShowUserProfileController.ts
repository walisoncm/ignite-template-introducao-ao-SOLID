import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params as { user_id: string };

    try {
      const user = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).json(user);
    } catch (error) {
      return response.status(404).json({
        message: error.message || "Unexpected error.",
        error: error.stack,
      });
    }
  }
}

export { ShowUserProfileController };
